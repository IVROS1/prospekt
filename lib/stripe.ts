import Stripe from 'stripe'

export function getStripe(): Stripe {
  return new Stripe(process.env.STRIPE_SECRET_KEY || 'sk_test_placeholder_for_build', {
    apiVersion: '2026-02-25.clover',
  })
}

export const PLANS = {
  free:    { name: 'Gratis',   price: 0,    leads: 5,     priceId: null },
  starter: { name: 'Starter',  price: 299,  leads: 50,    priceId: process.env.STRIPE_PRICE_STARTER },
  pro:     { name: 'Pro',      price: 799,  leads: 250,   priceId: process.env.STRIPE_PRICE_PRO },
  agency:  { name: 'Agency',   price: 1999, leads: 99999, priceId: process.env.STRIPE_PRICE_AGENCY },
} as const

export type PlanKey = keyof typeof PLANS
