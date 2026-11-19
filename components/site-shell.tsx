"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";
import { CloseIcon, MenuIcon, MessageIcon, PhoneIcon } from "./icons";

type Lang="ta"|"en";
const LangCtx=createContext<{lang:Lang;setLang:(l:Lang)=>void}>({lang:"ta",setLang:()=>{}});
export const useLang=()=>useContext(LangCtx);
export const copy=(lang:Lang, ta:string,en:string)=>lang==="ta"?ta:en;

const nav=[
  ["/","முகப்பு","Home"],["/properties","சொத்துகள்","Properties"],["/about","எங்களைப் பற்றி","About"],
  ["/sell","சொத்தை விற்க","Sell"],["/contact","தொடர்பு","Contact"]
];

export function SiteShell({children}:{children:React.ReactNode}){
  const [lang,setLangState]=useState<Lang>("ta"); const [menu,setMenu]=useState(false); const path=usePathname();
  useEffect(()=>{const saved=localStorage.getItem("kre-lang") as Lang|null;if(saved)setLangState(saved)},[]);
  const setLang=(l:Lang)=>{setLangState(l);localStorage.setItem("kre-lang",l)};
  return <LangCtx.Provider value={{lang,setLang}}>
    <div className="bg-[#073f32] text-white text-sm">
      <div className="container-site flex min-h-10 items-center justify-between gap-3 py-2">
        <a className="focus-ring flex items-center gap-2 font-semibold" href="tel:+94764851677"><PhoneIcon className="h-4 w-4 text-[#e3b958]"/>+94 76 485 1677</a>
        <span className="hidden sm:block text-white/70">{copy(lang,"6 மாவட்டங்களில் சேவை","Serving 6 districts")}</span>
        <div className="flex rounded-full border border-white/20 p-0.5" aria-label="Language">
          <button onClick={()=>setLang("ta")} className={`focus-ring rounded-full px-3 py-1 ${lang==="ta"?"bg-[#d8aa45] text-[#052e27]":""}`}>தமிழ்</button>
          <button onClick={()=>setLang("en")} className={`focus-ring rounded-full px-3 py-1 ${lang==="en"?"bg-[#d8aa45] text-[#052e27]":""}`}>EN</button>
        </div>
      </div>
    </div>
    <header className="sticky top-0 z-40 border-b border-[#073f32]/10 bg-[#fbfaf6]/95 backdrop-blur">
      <div className="container-site flex h-[76px] items-center justify-between">
        <Link href="/" className="focus-ring flex items-center gap-3" onClick={()=>setMenu(false)}>
          <Image src="/logo.jpeg" width={58} height={58} alt="Kilinochchi RealEstate logo" className="h-14 w-14 rounded-full object-cover ring-2 ring-[#d8aa45]/50" priority/>
          <div><div className="font-serif text-lg font-bold leading-tight text-[#073f32]">Kilinochchi</div><div className="text-[11px] font-bold tracking-[.2em] text-[#a57919]">REALESTATE</div></div>
        </Link>
        <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary navigation">
          {nav.map(([href,ta,en])=><Link key={href} href={href} className={`focus-ring py-3 text-[15px] font-bold ${path===href?"text-[#a57919]":"text-[#234b42] hover:text-[#a57919]"}`}>{copy(lang,ta,en)}</Link>)}
          <a href="https://wa.me/94717111677" target="_blank" rel="noreferrer" className="focus-ring rounded-full bg-[#d8aa45] px-5 py-3 font-bold text-[#052e27] hover:bg-[#e5bd62]">WhatsApp</a>
        </nav>
        <button className="focus-ring rounded-full border border-[#073f32]/15 p-3 lg:hidden" onClick={()=>setMenu(!menu)} aria-label="Toggle menu">{menu?<CloseIcon className="h-6 w-6"/>:<MenuIcon className="h-6 w-6"/>}</button>
      </div>
      {menu&&<nav className="container-site border-t border-[#073f32]/10 py-4 lg:hidden">{nav.map(([href,ta,en])=><Link key={href} href={href} onClick={()=>setMenu(false)} className="focus-ring block border-b border-[#073f32]/10 py-3 font-bold">{copy(lang,ta,en)}</Link>)}</nav>}
    </header>
    <main>{children}</main>
    <footer className="bg-[#052e27] text-white">
      <div className="container-site grid gap-10 py-14 md:grid-cols-[1.2fr_.8fr_.8fr]">
        <div><div className="flex items-center gap-4"><Image src="/logo.jpeg" width={72} height={72} alt="Kilinochchi RealEstate" className="rounded-full"/><div className="font-serif text-xl font-bold">Kilinochchi<br/>RealEstate</div></div><p className="mt-5 max-w-md text-white/65">{copy(lang,"உங்கள் சொத்து வாங்கல் மற்றும் விற்பனைக்கான நம்பிக்கையான பங்காளர்!","Your trusted partner for buying and selling property.")}</p></div>
        <div><h2 className="font-bold text-[#e3b958]">{copy(lang,"விரைவு இணைப்புகள்","Quick links")}</h2><div className="mt-4 grid gap-3">{nav.slice(0,5).map(([h,ta,en])=><Link key={h} href={h} className="text-white/70 hover:text-white">{copy(lang,ta,en)}</Link>)}</div></div>
        <div><h2 className="font-bold text-[#e3b958]">{copy(lang,"தொடர்பு கொள்ளுங்கள்","Get in touch")}</h2><a className="mt-4 flex items-center gap-2 text-white/75" href="tel:+94764851677"><PhoneIcon className="h-5 w-5"/>+94 76 485 1677</a><a className="mt-3 flex items-center gap-2 text-white/75" href="https://wa.me/94717111677"><MessageIcon className="h-5 w-5"/>+94 71 711 1677</a></div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-sm text-white/45">© {new Date().getFullYear()} Kilinochchi RealEstate · KilinochchiRealEstate.lk {copy(lang,"(கோரப்பட்ட டொமைன்)","(requested domain)")}</div>
    </footer>
    <a href="https://wa.me/94717111677" target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp" className="focus-ring fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-xl"><MessageIcon className="h-7 w-7"/></a>
  </LangCtx.Provider>
}
