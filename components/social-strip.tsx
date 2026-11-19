"use client";
import { copy, useLang } from "./site-shell";
const socials=[
  ["Facebook","https://www.facebook.com/KilinochchiRealEstate?mibextid=ZbWKwL","f","#1877F2"],
  ["YouTube","https://youtube.com/@kilinochchirealestate?si=jMf17vhw35NxL2UC","▶","#FF0033"],
  ["Instagram","https://www.instagram.com/kilinochchirealestate?fqnt=MWE5am9mdDdpN251Zw==","◎","#C13584"],
  ["TikTok","https://www.tiktok.com/@kilinochchi03?_r=1&_t=ZS-9BXFy2YTart","♪","#111111"]
];
export function SocialStrip(){const {lang}=useLang();return <section className="relative z-10 -mt-5"><div className="container-site rounded-2xl border border-[#073f32]/10 bg-white p-4 soft-shadow"><div className="flex flex-col items-center justify-between gap-4 md:flex-row"><p className="font-bold text-[#073f32]">{copy(lang,"எங்களுடன் இணைந்திருங்கள்","Connect with us")}</p><div className="grid w-full grid-cols-2 gap-2 md:w-auto md:grid-cols-4">{socials.map(([name,url,symbol,color])=><a key={name} href={url} target="_blank" rel="noreferrer" className="focus-ring flex items-center justify-center gap-2 rounded-xl border border-[#073f32]/10 px-4 py-3 text-sm font-bold hover:-translate-y-0.5 hover:shadow-md"><span style={{background:color}} className="grid h-7 w-7 place-items-center rounded-full text-base font-black text-white">{symbol}</span>{name}</a>)}</div></div></div></section>}
