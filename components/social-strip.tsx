"use client";
import { copy, useLang } from "./site-shell";

const socials = [
  ["Facebook", "https://www.facebook.com/KilinochchiRealEstate?mibextid=ZbWKwL"],
  ["YouTube", "https://youtube.com/@kilinochchirealestate?si=jMf17vhw35NxL2UC"],
  ["Instagram", "https://www.instagram.com/kilinochchirealestate?fqnt=MWE5am9mdDdpN251Zw=="],
  ["TikTok", "https://www.tiktok.com/@kilinochchi03?_r=1&_t=ZS-9BXFy2YTart"],
];

function SocialLogo({ name }: { name: string }) {
  if (name === "YouTube") return <svg viewBox="0 0 32 32" className="h-8 w-8" aria-hidden="true"><rect width="32" height="32" rx="8" fill="#ff0033"/><path d="m13 10.8 8.5 5.2-8.5 5.2V10.8Z" fill="white"/></svg>;
  if (name === "Instagram") return <svg viewBox="0 0 32 32" className="h-8 w-8" aria-hidden="true"><defs><linearGradient id="instagram-gradient" x1="4" y1="28" x2="28" y2="4"><stop stopColor="#ffb000"/><stop offset=".45" stopColor="#ff0069"/><stop offset="1" stopColor="#7638fa"/></linearGradient></defs><rect width="32" height="32" rx="9" fill="url(#instagram-gradient)"/><rect x="7.5" y="7.5" width="17" height="17" rx="5.5" fill="none" stroke="white" strokeWidth="2.2"/><circle cx="16" cy="16" r="4.1" fill="none" stroke="white" strokeWidth="2.2"/><circle cx="22.1" cy="9.9" r="1.35" fill="white"/></svg>;
  if (name === "Facebook") return <svg viewBox="0 0 32 32" className="h-8 w-8" aria-hidden="true"><rect width="32" height="32" rx="8" fill="#1877f2"/><path d="M18.2 27V17.2h3.3l.5-3.8h-3.8V11c0-1.1.3-1.9 1.9-1.9h2V5.7c-.4 0-1.6-.2-2.9-.2-2.9 0-4.9 1.8-4.9 5v2.8H11v3.8h3.3V27h3.9Z" fill="white"/></svg>;
  return <svg viewBox="0 0 32 32" className="h-8 w-8" aria-hidden="true"><rect width="32" height="32" rx="8" fill="#111"/><path d="M19.4 7.2c.5 2.6 2 4.2 4.6 4.4v3.1a9 9 0 0 1-4.5-1.3v6.4a6.4 6.4 0 1 1-5.5-6.3v3.2a3.2 3.2 0 1 0 2.3 3.1V7.2h3.1Z" fill="white"/></svg>;
}

export function SocialStrip(){const {lang}=useLang();return <section className="relative z-10 -mt-5"><div className="container-site rounded-2xl border border-[#073f32]/10 bg-white p-4 soft-shadow"><div className="flex flex-col items-center justify-between gap-4 md:flex-row"><p className="font-bold text-[#073f32]">{copy(lang,"எங்களுடன் இணைந்திருங்கள்","Connect with us")}</p><div className="grid w-full grid-cols-2 gap-2 md:w-auto md:grid-cols-4">{socials.map(([name,url])=><a key={name} href={url} target="_blank" rel="noreferrer" className="focus-ring flex items-center justify-center gap-2 rounded-xl border border-[#073f32]/10 px-4 py-3 text-sm font-bold hover:-translate-y-0.5 hover:shadow-md"><SocialLogo name={name}/>{name}</a>)}</div></div></div></section>}
