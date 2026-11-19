import { createClient } from "@supabase/supabase-js";
import type { District } from "./districts";

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const key = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const isSupabaseConfigured = Boolean(url && key && !url.includes("YOUR_PROJECT"));
export const supabase = isSupabaseConfigured ? createClient(url!, key!) : null;

export type Property = {
  id: string; title_ta: string; title_en: string; description_ta: string | null;
  description_en: string | null; district: District;
  property_type: string; price_lkr: number | null; land_size: string | null;
  location_text: string | null; status: "available"|"reserved"|"sold";
  featured: boolean; published: boolean; image_urls: string[]; created_at: string;
};
