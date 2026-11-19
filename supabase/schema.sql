create extension if not exists pgcrypto;

create table if not exists public.admin_users (
  user_id uuid primary key references auth.users(id) on delete cascade
);

create table if not exists public.properties (
  id uuid primary key default gen_random_uuid(),
  title_ta text not null,
  title_en text not null,
  description_ta text,
  description_en text,
  district text not null check (district in ('Kilinochchi','Vavuniya','Jaffna','Mullaitivu','Trincomalee','Mannar')),
  property_type text not null check (property_type in ('land','house','commercial')),
  price_lkr numeric check (price_lkr is null or price_lkr >= 0),
  land_size text,
  location_text text,
  status text not null default 'available' check (status in ('available','reserved','sold')),
  featured boolean not null default false,
  published boolean not null default false,
  image_urls text[] not null default '{}',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.admin_users enable row level security;
alter table public.properties enable row level security;

-- Expands the district options safely when upgrading an existing database.
alter table public.properties drop constraint if exists properties_district_check;
alter table public.properties add constraint properties_district_check
  check (district in ('Kilinochchi','Vavuniya','Jaffna','Mullaitivu','Trincomalee','Mannar'));

create policy "Public can read published properties" on public.properties for select using (published = true);
create policy "Admins can read all properties" on public.properties for select to authenticated using (exists (select 1 from public.admin_users where user_id = auth.uid()));
create policy "Admins can insert properties" on public.properties for insert to authenticated with check (exists (select 1 from public.admin_users where user_id = auth.uid()));
create policy "Admins can update properties" on public.properties for update to authenticated using (exists (select 1 from public.admin_users where user_id = auth.uid())) with check (exists (select 1 from public.admin_users where user_id = auth.uid()));
create policy "Admins can delete properties" on public.properties for delete to authenticated using (exists (select 1 from public.admin_users where user_id = auth.uid()));

-- After creating the intended administrator in Supabase Authentication,
-- add that exact user's UUID manually. Never expose the service-role key to this website.
-- insert into public.admin_users (user_id) values ('YOUR-AUTH-USER-UUID');
