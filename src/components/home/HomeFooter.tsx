import Link from "next/link";
import { Mail } from "lucide-react";

const footerCols = [
  {
    title: "About",
    links: [
      { href: "/about", label: "About Us" },
      { href: "/blog", label: "Blog" },
      { href: "/careers", label: "Careers" },
      { href: "/jobs", label: "Jobs" },
      { href: "/press", label: "In Press" },
      { href: "/gallery", label: "Gallery" },
    ],
  },
  {
    title: "Support",
    links: [
      { href: "/contact", label: "Contact us" },
      { href: "/chat", label: "Online Chat" },
      { href: "/whatsapp", label: "Whatsapp" },
      { href: "/telegram", label: "Telegram" },
      { href: "/ticketing", label: "Ticketing" },
      { href: "/call-center", label: "Call Center" },
    ],
  },
  {
    title: "FAQ",
    links: [
      { href: "/account", label: "Account" },
      { href: "/booking", label: "Booking" },
      { href: "/payments", label: "Payments" },
      { href: "/returns", label: "Returns" },
      { href: "/privacy", label: "Privacy Policy" },
      { href: "/terms", label: "Terms & Condition" },
    ],
  },
];

export function HomeFooter() {
  return (
    <footer className="bg-[#161515] text-white pt-24 pb-12 font-sans relative z-0 mt-[-2rem] rounded-t-[3rem]">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 mb-24">
           
           {/* Left: Link Columns (About, Support, FAQ) */}
           <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-10">
             {footerCols.map((col) => (
               <div key={col.title}>
                 <h4 className="text-white text-[15px] font-bold mb-8">
                   {col.title}
                 </h4>
                 <ul className="space-y-5">
                   {col.links.map((link) => (
                     <li key={link.href}>
                       <Link
                         href={link.href}
                         className="text-gray-400 text-[13px] font-medium hover:text-white transition-colors"
                       >
                         {link.label}
                       </Link>
                     </li>
                   ))}
                 </ul>
               </div>
             ))}
           </div>

           {/* Right: Newsletter & Socials */}
           <div className="lg:col-span-5 lg:col-start-8 flex flex-col">
              <h4 className="text-white text-[15px] font-bold mb-6">
                Newsletter
              </h4>
              <p className="text-gray-400 text-[13px] leading-relaxed mb-8 max-w-sm font-medium">
                Don't miss out on the exciting world of travel – subscribe now and embark on a journey of discovery with us.
              </p>
              
              {/* Newsletter Input Box */}
              <div className="relative flex items-center border border-white/10 rounded-full p-1.5 bg-[#161515] mb-8 shadow-sm focus-within:border-white/30 transition-colors max-w-[420px]">
                 <div className="pl-4 pr-3 text-gray-400">
                    <Mail className="w-4 h-4" />
                 </div>
                 <input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="flex-1 bg-transparent text-[13px] text-white outline-none placeholder:text-gray-500 min-w-0"
                 />
                 <button className="bg-[#6B6B6B] hover:bg-[#5a5a5a] text-white px-6 py-2.5 rounded-full text-[12px] font-bold transition-colors shrink-0">
                    Submit
                 </button>
              </div>

              {/* Social Icons */}
              <div className="flex items-center gap-3 self-end lg:pr-10">
                 <Link href="https://instagram.com" className="w-8 h-8 rounded-full bg-[#6B6B6B] hover:bg-[#5a5a5a] flex items-center justify-center transition-colors">
                    <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="text-white"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                 </Link>
                 <Link href="https://facebook.com" className="w-8 h-8 rounded-full bg-[#6B6B6B] hover:bg-[#5a5a5a] flex items-center justify-center transition-colors">
                    <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" strokeWidth="2" fill="currentColor" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                 </Link>
                 <Link href="https://youtube.com" className="w-8 h-8 rounded-full bg-[#6B6B6B] hover:bg-[#5a5a5a] flex items-center justify-center transition-colors">
                    <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
                 </Link>
              </div>
           </div>

        </div>

        {/* Bottom Centered Copyright Text */}
        <div className="flex justify-center pt-8 border-t border-white/5">
           <p className="text-gray-300 text-[13px] font-medium tracking-wide">
             ©{new Date().getFullYear()} Exclusive Ceylon, All Rights Reserved
           </p>
        </div>
        
      </div>
    </footer>
  );
}
