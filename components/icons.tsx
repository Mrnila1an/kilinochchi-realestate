import { SVGProps } from "react";
const base=(p:SVGProps<SVGSVGElement>)=><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...p}/>;
export const MenuIcon=(p:SVGProps<SVGSVGElement>)=>{const s=base(p);return {...s,props:{...s.props,children:<><path d="M4 7h16M4 12h16M4 17h16"/></>}}};
export const CloseIcon=(p:SVGProps<SVGSVGElement>)=>{const s=base(p);return {...s,props:{...s.props,children:<path d="m6 6 12 12M18 6 6 18"/>}}};
export const SearchIcon=(p:SVGProps<SVGSVGElement>)=>{const s=base(p);return {...s,props:{...s.props,children:<><circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/></>}}};
export const PhoneIcon=(p:SVGProps<SVGSVGElement>)=>{const s=base(p);return {...s,props:{...s.props,children:<path d="M5 4h4l2 5-3 2c1.4 2.7 3.3 4.6 6 6l2-3 5 2v4c0 1-1 2-2 2C9.6 22 2 14.4 2 5c0-1 1-1 3-1Z"/>}}};
export const HomeIcon=(p:SVGProps<SVGSVGElement>)=>{const s=base(p);return {...s,props:{...s.props,children:<><path d="m3 11 9-8 9 8"/><path d="M5 10v10h14V10M9 20v-6h6v6"/></>}}};
export const MapIcon=(p:SVGProps<SVGSVGElement>)=>{const s=base(p);return {...s,props:{...s.props,children:<><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></>}}};
export const MessageIcon=(p:SVGProps<SVGSVGElement>)=>{const s=base(p);return {...s,props:{...s.props,children:<><path d="M21 12a8 8 0 0 1-12 7l-5 1 1-5A8 8 0 1 1 21 12Z"/><path d="M8.5 10.5c1 2 2 3 4 4"/></>}}};
