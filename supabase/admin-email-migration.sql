-- Make thilakannila7@gmail.com the only account allowed to manage properties.
drop policy if exists "Admins can read all properties" on public.properties;
drop policy if exists "Admins can insert properties" on public.properties;
drop policy if exists "Admins can update properties" on public.properties;
drop policy if exists "Admins can delete properties" on public.properties;

create policy "Admins can read all properties" on public.properties
  for select to authenticated
  using (lower(coalesce(auth.jwt()->>'email', '')) = 'thilakannila7@gmail.com');

create policy "Admins can insert properties" on public.properties
  for insert to authenticated
  with check (lower(coalesce(auth.jwt()->>'email', '')) = 'thilakannila7@gmail.com');

create policy "Admins can update properties" on public.properties
  for update to authenticated
  using (lower(coalesce(auth.jwt()->>'email', '')) = 'thilakannila7@gmail.com')
  with check (lower(coalesce(auth.jwt()->>'email', '')) = 'thilakannila7@gmail.com');

create policy "Admins can delete properties" on public.properties
  for delete to authenticated
  using (lower(coalesce(auth.jwt()->>'email', '')) = 'thilakannila7@gmail.com');
