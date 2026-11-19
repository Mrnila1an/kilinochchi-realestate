"use client";
import { copy,useLang } from "./site-shell";
export function PageHero({ta,en,subTa,subEn}:{ta:string;en:string;subTa:string;subEn:string}){const {lang}=useLang();return <section className="bg-[#073f32] py-20 text-white"><div className="container-site"><div className="gold-line"/><h1 className="mt-6 font-serif text-5xl font-bold md:text-7xl">{copy(lang,ta,en)}</h1><p className="mt-5 max-w-2xl text-lg leading-8 text-white/65">{copy(lang,subTa,subEn)}</p></div></section>}
