import type { Metadata } from "next";
import "./globals.css";
import { SiteShell } from "@/components/site-shell";

export const metadata:Metadata={
  title:{default:"Kilinochchi RealEstate",template:"%s | Kilinochchi RealEstate"},
  description:"Property buying and selling support across Kilinochchi, Vavuniya and Jaffna.",
  metadataBase:new URL("https://kilinochchirealestate.lk"),
};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="ta"><body><SiteShell>{children}</SiteShell></body></html>}
