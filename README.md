# Kilinochchi RealEstate

Tamil-first bilingual real-estate website built with Next.js, Tailwind CSS and optional Supabase.

## Local setup

1. Run `npm install` and `npm run dev`.
2. Copy `.env.example` to `.env.local` and add the Supabase project URL and public anon key.
3. Run `supabase/schema.sql` in the Supabase SQL editor.
4. Create the admin in Supabase Authentication, then insert that user's UUID into `public.admin_users` as shown at the bottom of the schema.
5. Visit `/admin` to manage properties.

Never place the Supabase service-role key in this frontend project. Row-level security controls all admin writes. The requested `KilinochchiRealEstate.lk` domain must be registered/verified separately, then connected at the chosen host.
