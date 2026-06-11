import { AnnouncementBar } from "@/components/home/AnnouncementBar";
import { HomeFooter } from "@/components/home/HomeFooter";
import { MobileNav } from "@/components/home/MobileNav";
import { InnerHeader } from "@/components/layout/InnerHeader";
import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";

export default function PackagesPage() {
  const allDestinations = [
    { title: "Yala Safari Package", price: "$250", duration: "7 Days", category: "WILDLIFE", image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=800&q=80" },
    { title: "Ella Train Journey", price: "$210", duration: "5 Days", category: "SCENIC", image: "https://images.unsplash.com/photo-1530866495561-507c9faab2ed?auto=format&fit=crop&w=800&q=80" },
    { title: "Galle Fort Tour", price: "$180", duration: "3 Days", category: "HERITAGE", image: "https://images.unsplash.com/photo-1620849641777-66bd327361cd?auto=format&fit=crop&w=800&q=80" },
    { title: "Sigiriya Rock Climb", price: "$150", duration: "2 Days", category: "HERITAGE", image: "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?auto=format&fit=crop&w=800&q=80" },
    { title: "Mirissa Whale Watching", price: "$120", duration: "1 Day", category: "WILDLIFE", image: "https://images.unsplash.com/photo-1596540608035-716447817415?auto=format&fit=crop&w=800&q=80" },
    { title: "Nuwara Eliya Tea Trails", price: "$190", duration: "4 Days", category: "HIGHLANDS", image: "https://images.unsplash.com/photo-1560064506-654c6198f3b6?auto=format&fit=crop&w=800&q=80" },
  ];

  return (
    <>
      <div className="sticky top-0 z-50">
        <AnnouncementBar />
        <InnerHeader activeHref="/packages" />
      </div>

      <main className="bg-[#FAFAFA] min-h-screen pt-12 pb-32">
        <div className="mx-auto max-w-[1200px] px-6 md:px-8">
           
           <header className="mb-16 text-center">
              <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-4">EXPLORE THE ISLAND</p>
              <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-[#111] mb-6">Our Destinations</h1>
              <p className="text-gray-500 text-lg font-medium max-w-2xl mx-auto">
                 Discover our carefully curated packages and beautiful destinations. Find your perfect getaway in Sri Lanka.
              </p>
           </header>

           {/* Destination Grid */}
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {allDestinations.map((pkg) => (
                <div key={pkg.title} className="relative aspect-[3/4] rounded-[2.5rem] overflow-hidden group shadow-lg cursor-pointer">
                   <Image src={pkg.image} alt={pkg.title} fill className="object-cover transition-transform duration-[3s] group-hover:scale-110" />
                   
                   {/* Top Tags */}
                   <div className="absolute top-6 inset-x-6 flex justify-between items-start">
                      <div className="bg-white/20 backdrop-blur-md border border-white/20 text-white px-4 py-1.5 rounded-full text-[11px] font-bold">
                         {pkg.duration}
                      </div>
                      <div className="bg-white/20 backdrop-blur-md border border-white/20 w-8 h-8 rounded-full flex items-center justify-center">
                         <Star className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
                      </div>
                   </div>

                   {/* Bottom Glass Bar */}
                   <div className="absolute bottom-6 inset-x-6 bg-black/30 backdrop-blur-xl border border-white/10 p-5 rounded-3xl flex justify-between items-center text-white transform transition-transform duration-500 group-hover:-translate-y-2">
                      <div>
                         <p className="text-[9px] uppercase tracking-widest text-white/60 font-bold mb-1">{pkg.category}</p>
                         <h3 className="text-sm font-semibold">{pkg.title}</h3>
                      </div>
                      <div className="text-right">
                         <p className="text-lg font-bold">{pkg.price}</p>
                      </div>
                   </div>
                </div>
              ))}
           </div>
           
        </div>
      </main>

      <MobileNav variant="page" activeHref="/packages" />
      <HomeFooter />
    </>
  );
}
