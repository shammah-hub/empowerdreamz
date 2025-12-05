// app/api/webhooks/stripe/route.ts

import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import admin from 'firebase-admin';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

// Initialize Firebase Admin (only once)
if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert({
      projectId: process.env.FIREBASE_PROJECT_ID,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
    }),
  });
}

const db = admin.firestore();

export async function POST(request: NextRequest) {
  const body = await request.text();
  
  // Get signature from request headers directly
  const signature = request.headers.get('stripe-signature');

  if (!signature) {
    return NextResponse.json({ error: 'No signature' }, { status: 400 });
  }

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (err) {
    const error = err as Error;
    console.error(`Webhook signature verification failed: ${error.message}`);
    return NextResponse.json({ error: 'Webhook error' }, { status: 400 });
  }

  // Handle successful payment
  if (event.type === 'payment_intent.succeeded') {
    const paymentIntent = event.data.object as Stripe.PaymentIntent;
    
    const amountInDollars = paymentIntent.amount / 100;
    
    try {
      // Get the active project
      const projectsRef = db.collection('projects');
      const snapshot = await projectsRef.where('isActive', '==', true).limit(1).get();
      
      if (!snapshot.empty) {
        const projectDoc = snapshot.docs[0];
        const projectData = projectDoc.data();
        
        // Update raised amount and supporter count
        await projectDoc.ref.update({
          raised: (projectData.raised || 0) + amountInDollars,
          supporters: (projectData.supporters || 0) + 1,
          updatedAt: admin.firestore.FieldValue.serverTimestamp(),
        });

        // Store individual donation record
        await db.collection('donations').add({
          projectId: projectDoc.id,
          amount: amountInDollars,
          paymentIntentId: paymentIntent.id,
          donorEmail: paymentIntent.receipt_email || 'anonymous',
          createdAt: admin.firestore.FieldValue.serverTimestamp(),
        });

        console.log(`✅ Updated project ${projectDoc.id}: +$${amountInDollars}`);
      }
    } catch (error) {
      console.error('❌ Error updating Firestore:', error);
      return NextResponse.json({ error: 'Database update failed' }, { status: 500 });
    }
  }

  return NextResponse.json({ received: true });
}