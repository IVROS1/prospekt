-- Prospekt Database Schema

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Searches
CREATE TABLE IF NOT EXISTS searches (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  query_what TEXT NOT NULL,
  query_who TEXT NOT NULL,
  query_where TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Leads
CREATE TABLE IF NOT EXISTS leads (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  search_id UUID REFERENCES searches(id) ON DELETE CASCADE,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  company_name TEXT,
  company_website TEXT,
  company_industry TEXT,
  company_size TEXT,
  company_location TEXT,
  contact_name TEXT,
  contact_role TEXT,
  contact_linkedin_url TEXT,
  contact_email TEXT,
  ai_email_text TEXT,
  ai_linkedin_text TEXT,
  status TEXT DEFAULT 'new',
  exported_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Subscriptions
CREATE TABLE IF NOT EXISTS subscriptions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE UNIQUE,
  stripe_customer_id TEXT,
  stripe_subscription_id TEXT,
  plan TEXT DEFAULT 'free',
  leads_used_this_month INT DEFAULT 0,
  leads_limit INT DEFAULT 5,
  billing_period_start TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Row Level Security
ALTER TABLE searches ENABLE ROW LEVEL SECURITY;
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;
ALTER TABLE subscriptions ENABLE ROW LEVEL SECURITY;

-- RLS Policies
CREATE POLICY "Users own their searches" ON searches
  FOR ALL USING (auth.uid() = user_id);

CREATE POLICY "Users own their leads" ON leads
  FOR ALL USING (auth.uid() = user_id);

CREATE POLICY "Users own their subscription" ON subscriptions
  FOR ALL USING (auth.uid() = user_id);

-- Auto-create subscription on signup
CREATE OR REPLACE FUNCTION create_user_subscription()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO subscriptions (user_id, plan, leads_limit)
  VALUES (NEW.id, 'free', 5)
  ON CONFLICT (user_id) DO NOTHING;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE OR REPLACE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION create_user_subscription();

-- Monthly reset function (run via cron)
CREATE OR REPLACE FUNCTION reset_monthly_leads()
RETURNS void AS $$
BEGIN
  UPDATE subscriptions SET leads_used_this_month = 0;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;
