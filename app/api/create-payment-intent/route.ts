// app/api/create-payment-intent/route.ts
import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-09-30.clover', // Stable version for live production
  typescript: true, // Ensure TypeScript support (if needed)
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

    // Create PaymentIntent with automatic payment methods
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: 'usd',
      automatic_payment_methods: {
        enabled: true,
        allow_redirects: 'never', // Prevent redirects for wallets
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

    if (error instanceof Stripe.errors.StripeError) {
      console.error('Stripe error details:', {
        message: error.message,
        code: error.code,
        type: error.type,
      });
      return NextResponse.json(
        { error: error.message || 'Payment setup failed' },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: 'Failed to create payment intent' },
      { status: 500 }
    );
  }
}