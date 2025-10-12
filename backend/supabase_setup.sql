-- Supabase setup script for Visual Muse
-- Create tables for assets, brand_kits, and campaigns

create table if not exists users (
  id uuid primary key default uuid_generate_v4(),
  email text unique not null,
  created_at timestamp with time zone default timezone('utc', now())
);

create table if not exists brand_kits (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid references users(id),
  name text,
  logo_url text,
  colors jsonb,
  fonts jsonb,
  created_at timestamp with time zone default timezone('utc', now())
);

create table if not exists campaigns (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid references users(id),
  context text,
  created_at timestamp with time zone default timezone('utc', now())
);

create table if not exists assets (
  id uuid primary key default uuid_generate_v4(),
  campaign_id uuid references campaigns(id),
  type text,
  url text,
  meta jsonb,
  created_at timestamp with time zone default timezone('utc', now())
);

-- Create storage buckets for assets
-- (Run this in Supabase Storage UI or CLI)
-- supabase storage create-bucket assets
