// app/api/create-payment-intent/route.ts

import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-09-30.clover',
});

export async function POST(request: NextRequest) {
  try {
    const { amount } = await request.json();

    // Validate amount
    if (!amount || typeof amount !== 'number' || amount < 500) {
      return NextResponse.json(
        { error: 'Invalid amount. Minimum donation is $5.' },
        { status: 400 }
      );
    }

    // Create a PaymentIntent for embedded payment form
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: 'usd',
      automatic_payment_methods: {
        enabled: true,
      },
      metadata: {
        type: 'donation',
        organization: 'EmpowerDreamz',
      },
    });

    return NextResponse.json({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    console.error('Error creating payment intent:', error);
    return NextResponse.json(
      { error: 'Failed to create payment intent' },
      { status: 500 }
    );
  }
}