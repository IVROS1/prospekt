import { NextRequest, NextResponse } from 'next/server'
import { getStripe, PLANS, PlanKey } from '@/lib/stripe'
import { adminClient } from '@/lib/supabase'
import Stripe from 'stripe'

export const dynamic = 'force-dynamic'

export async function POST(req: NextRequest) {
  const body = await req.text()
  const sig = req.headers.get('stripe-signature')!

  let event: Stripe.Event
  try {
    event = getStripe().webhooks.constructEvent(body, sig, process.env.STRIPE_WEBHOOK_SECRET!)
  } catch {
    return NextResponse.json({ error: 'Invalid signature' }, { status: 400 })
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const db = adminClient as any

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object as Stripe.Checkout.Session
    const userId = session.metadata?.user_id
    const plan = (session.metadata?.plan ?? 'free') as PlanKey
    const planConfig = PLANS[plan]

    if (userId && planConfig) {
      await db.from('subscriptions').upsert({
        user_id: userId,
        stripe_customer_id: String(session.customer),
        stripe_subscription_id: String(session.subscription),
        plan,
        leads_limit: planConfig.leads,
        leads_used_this_month: 0,
        billing_period_start: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      }, { onConflict: 'user_id' })
    }
  }

  if (event.type === 'customer.subscription.deleted') {
    const sub = event.data.object as Stripe.Subscription
    const userId = sub.metadata?.user_id
    if (userId) {
      await db.from('subscriptions').upsert({
        user_id: userId,
        plan: 'free',
        leads_limit: 5,
        leads_used_this_month: 0,
        updated_at: new Date().toISOString(),
      }, { onConflict: 'user_id' })
    }
  }

  return NextResponse.json({ received: true })
}
