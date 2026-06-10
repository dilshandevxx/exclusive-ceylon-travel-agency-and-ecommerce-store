import Image from "next/image";
import Link from "next/link";
import { Search, Heart, User, ShoppingBag, ArrowRight } from "lucide-react";
import { SiteHeader } from "@/components/home/SiteHeader";
import { HomeFooter } from "@/components/home/HomeFooter";

const categories = [
  { name: "Beaches", img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80" },
  { name: "Wildlife", img: "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=600&q=80" },
  { name: "Culture", img: "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=600&q=80" },
  { name: "Highlands", img: "https://images.unsplash.com/photo-1560064506-654c6198f3b6?auto=format&fit=crop&w=600&q=80" },
];

const popularPackages = [
  { name: "South Coast Escape", price: "$1,890", img: "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?auto=format&fit=crop&w=800&q=80" },
  { name: "Yala Safari Adventure", price: "$2,100", img: "https://images.unsplash.com/photo-1549366021-9f761d450615?auto=format&fit=crop&w=800&q=80" },
  { name: "Kandy Cultural Tour", price: "$1,500", img: "https://images.unsplash.com/photo-1625835698380-60b5435dc021?auto=format&fit=crop&w=800&q=80" },
  { name: "Ella Train Journey", price: "$1,200", img: "https://images.unsplash.com/photo-1586521995568-39abaa0c2311?auto=format&fit=crop&w=800&q=80" },
  { name: "Galle Fort Heritage", price: "$1,150", img: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=800&q=80" },
  { name: "Arugam Bay Surf", price: "$1,450", img: "https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&w=800&q=80" },
  { name: "Sigiriya Rock Climb", price: "$1,300", img: "https://images.unsplash.com/photo-1601058694080-d29026402410?auto=format&fit=crop&w=800&q=80" },
  { name: "Trincomalee Whales", price: "$1,950", img: "https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?auto=format&fit=crop&w=800&q=80" },
];

const suggestedPackages = [
  { name: "Romantic Honeymoon", rating: "4.9", price: "$3,200", img: "https://images.unsplash.com/photo-1533423996375-f914ab160932?auto=format&fit=crop&w=800&q=80" },
  { name: "Family Tropical Break", rating: "4.8", price: "$4,100", img: "https://images.unsplash.com/photo-1602002418082-a4443e081dd1?auto=format&fit=crop&w=800&q=80" },
  { name: "Wellness Retreat", rating: "5.0", price: "$2,800", img: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80" },
  { name: "Culinary Expedition", rating: "4.7", price: "$1,900", img: "https://images.unsplash.com/photo-1534080564583-6be75777b70a?auto=format&fit=crop&w=800&q=80" },
];

const reviews = [
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1488161628813-04466f8724d4?auto=format&fit=crop&w=400&q=80",
];

export default function TravelPage() {
  return (
    <div className="min-h-screen bg-[#F7F7F5] font-sans text-[#1A1A1A]">
      {/* Top Navbar Section (mimicking the image's top nav) */}
      <header className="px-6 py-4 md:px-12 flex items-center justify-between bg-[#F7F7F5]">
        <div className="flex items-center gap-12">
          <Link href="/" className="font-[family-name:var(--font-serif)] text-2xl font-bold italic">Exclusive Ceylon</Link>
          <div className="hidden md:flex items-center gap-4 bg-white rounded-full px-4 py-2 border border-gray-200 shadow-sm">
            <span className="text-sm text-gray-500 pr-4 border-r border-gray-200">Categories</span>
            <span className="text-sm text-gray-500 px-4 border-r border-gray-200">Destinations</span>
            <div className="flex items-center gap-2 pl-4">
               <Search className="w-4 h-4 text-gray-400" />
               <input type="text" placeholder="Search" className="bg-transparent text-sm outline-none w-32" />
            </div>
          </div>
        </div>
        <div className="flex items-center gap-4">
           <div className="hidden md:flex items-center gap-2">
              <button className="px-4 py-2 rounded-full border border-gray-200 text-sm font-medium hover:bg-gray-50 transition">All</button>
              <button className="px-4 py-2 rounded-full border border-gray-200 text-sm font-medium hover:bg-gray-50 transition">Couples</button>
              <button className="px-4 py-2 rounded-full border border-gray-200 text-sm font-medium hover:bg-gray-50 transition">Family</button>
           </div>
           <Link href="/about" className="text-sm font-medium ml-4 hidden lg:block">About</Link>
           <Link href="/contact" className="text-sm font-medium hidden lg:block">FAQs</Link>
           <button className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition ml-4">
              <User className="w-4 h-4 text-gray-600" />
           </button>
        </div>
      </header>

      <main className="px-6 py-6 md:px-12 max-w-[1800px] mx-auto">
        {/* Hero Section */}
        <div className="grid gap-4 lg:grid-cols-2 lg:grid-rows-2 h-[800px]">
           {/* Main Hero Image */}
           <div className="relative col-span-1 lg:col-span-2 row-span-1 lg:row-span-1 h-[400px] lg:h-[500px] rounded-3xl overflow-hidden group">
              <Image 
                src="https://images.unsplash.com/photo-1546708973-c6258d4a9f33?auto=format&fit=crop&w=1600&q=80" 
                alt="Travel Hero" 
                fill 
                className="object-cover transition-transform duration-[3s] group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-black/20" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
                 <h1 className="text-5xl md:text-7xl font-light mb-4 font-[family-name:var(--font-serif)] drop-shadow-md">Summer Arrival of Journeys</h1>
                 <p className="max-w-md text-sm md:text-base font-medium drop-shadow-md mb-8 opacity-90">Experience breathtaking landscapes and authentic culture curated for the modern traveler.</p>
                 <button className="flex items-center gap-3 bg-white text-black px-6 py-3 rounded-full text-sm font-semibold uppercase tracking-wider hover:bg-gray-100 transition shadow-lg">
                    Explore Packages
                    <span className="w-6 h-6 rounded-full bg-black flex items-center justify-center text-white">
                       <ArrowRight className="w-3 h-3" />
                    </span>
                 </button>
              </div>
           </div>
           
           {/* Sub Hero 1 */}
           <div className="relative col-span-1 h-[250px] lg:h-auto rounded-3xl overflow-hidden bg-[#EAE4DF] group flex flex-col justify-end p-8">
              <Image src="https://images.unsplash.com/photo-1533423996375-f914ab160932?auto=format&fit=crop&w=800&q=80" alt="Sub 1" fill className="object-cover opacity-60 mix-blend-multiply transition-transform duration-[3s] group-hover:scale-105" />
              <div className="relative z-10 flex items-end justify-between w-full">
                 <h2 className="text-2xl font-[family-name:var(--font-serif)] max-w-[200px] text-[#1A1A1A]">Where dreams meet reality</h2>
                 <button className="bg-white text-black px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm hover:bg-gray-50 transition">Shop Now</button>
              </div>
           </div>

           {/* Sub Hero 2 */}
           <div className="relative col-span-1 h-[250px] lg:h-auto rounded-3xl overflow-hidden bg-[#D3CEC4] group flex flex-col justify-end p-8">
              <Image src="https://images.unsplash.com/photo-1506461883276-5945433cb07f?auto=format&fit=crop&w=800&q=80" alt="Sub 2" fill className="object-cover opacity-60 mix-blend-multiply transition-transform duration-[3s] group-hover:scale-105" />
              <div className="relative z-10 flex items-end justify-between w-full">
                 <h2 className="text-2xl font-[family-name:var(--font-serif)] max-w-[200px] text-[#1A1A1A]">Enchanting stays for every traveler</h2>
                 <button className="bg-white text-black px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm hover:bg-gray-50 transition">Shop Now</button>
              </div>
           </div>
        </div>

        {/* Categories Section */}
        <section className="mt-20">
           <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl md:text-3xl font-[family-name:var(--font-serif)]">Browse by categories</h2>
              <div className="hidden md:flex bg-white rounded-full p-1 border border-gray-200">
                 <button className="px-6 py-2 rounded-full bg-black text-white text-xs font-bold uppercase">All</button>
                 <button className="px-6 py-2 rounded-full text-gray-600 text-xs font-bold uppercase hover:bg-gray-50">Beaches</button>
                 <button className="px-6 py-2 rounded-full text-gray-600 text-xs font-bold uppercase hover:bg-gray-50">Wildlife</button>
              </div>
           </div>
           <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {categories.map((cat, i) => (
                 <div key={cat.name} className="relative aspect-[4/3] rounded-3xl overflow-hidden group bg-gray-100 cursor-pointer">
                    <Image src={cat.img} alt={cat.name} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />
                    <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide shadow-sm">
                       {cat.name}
                    </div>
                 </div>
              ))}
           </div>
        </section>

        {/* Popular Packages */}
        <section className="mt-24">
           <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl md:text-3xl font-[family-name:var(--font-serif)]">Popular packages</h2>
              <div className="hidden md:flex bg-white rounded-full p-1 border border-gray-200">
                 <button className="px-5 py-2 rounded-full bg-black text-white text-[10px] font-bold uppercase">All</button>
                 <button className="px-5 py-2 rounded-full text-gray-600 text-[10px] font-bold uppercase hover:bg-gray-50">Coastal</button>
                 <button className="px-5 py-2 rounded-full text-gray-600 text-[10px] font-bold uppercase hover:bg-gray-50">Cultural</button>
                 <button className="px-5 py-2 rounded-full text-gray-600 text-[10px] font-bold uppercase hover:bg-gray-50">Adventure</button>
              </div>
           </div>
           
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
              {popularPackages.map((pkg, i) => (
                 <div key={pkg.name} className="group cursor-pointer">
                    <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden bg-gray-200 mb-4">
                       <Image src={pkg.img} alt={pkg.name} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                       <button className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center hover:bg-white hover:text-red-500 transition shadow-sm">
                          <Heart className="w-4 h-4 text-gray-400 group-hover:text-red-400" />
                       </button>
                    </div>
                    <div>
                       <h3 className="font-medium text-[15px]">{pkg.name}</h3>
                       <p className="text-gray-500 text-sm mt-1">{pkg.price}</p>
                    </div>
                 </div>
              ))}
           </div>
        </section>

        {/* Exclusive Offers Banner */}
        <section className="mt-24">
           <div className="w-full bg-[#E5CDC5] rounded-[3rem] py-16 px-6 text-center flex flex-col items-center justify-center">
              <span className="border border-black/20 rounded-full px-4 py-1 text-[10px] font-bold uppercase tracking-widest mb-6">Offers</span>
              <h2 className="text-3xl md:text-5xl font-[family-name:var(--font-serif)] font-light leading-tight mb-8">
                 EXCLUSIVE TRAVEL OFFERS <br /> AWAIT FOR YOUR JOURNEY
              </h2>
              <button className="flex items-center gap-3 bg-white text-black px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-gray-50 transition shadow-sm">
                 Discover Offers
                 <span className="w-6 h-6 rounded-full bg-black flex items-center justify-center text-white">
                    <ArrowRight className="w-3 h-3" />
                 </span>
              </button>
           </div>
        </section>

        {/* Customer Reviews Collage */}
        <section className="mt-32 flex flex-col items-center justify-center text-center">
           <h2 className="text-3xl md:text-5xl font-[family-name:var(--font-serif)] font-light leading-tight mb-16">
              Over 350+ Customer <br /> reviews form our clients
           </h2>
           
           <div className="relative w-full max-w-4xl mx-auto h-[400px] flex items-center justify-center">
              {/* Center Large Images */}
              <div className="absolute left-1/2 -translate-x-full pr-2 w-1/3 aspect-square rounded-full overflow-hidden border-4 border-[#F7F7F5] z-20 shadow-xl">
                 <Image src={reviews[1]} alt="Review" fill className="object-cover" />
              </div>
              <div className="absolute left-1/2 w-[35%] aspect-square rounded-full overflow-hidden border-4 border-[#F7F7F5] z-30 shadow-2xl">
                 <Image src={reviews[2]} alt="Review" fill className="object-cover" />
              </div>
              
              {/* Smaller peripheral images */}
              <div className="absolute top-10 left-[15%] w-1/5 aspect-square rounded-full overflow-hidden border-4 border-[#F7F7F5] z-10 shadow-lg">
                 <Image src={reviews[0]} alt="Review" fill className="object-cover" />
              </div>
              <div className="absolute bottom-4 left-[20%] w-[15%] aspect-square rounded-full overflow-hidden border-4 border-[#F7F7F5] z-10 shadow-lg">
                 <Image src={reviews[3]} alt="Review" fill className="object-cover" />
              </div>
              <div className="absolute top-20 right-[15%] w-[18%] aspect-square rounded-full overflow-hidden border-4 border-[#F7F7F5] z-10 shadow-lg">
                 <Image src={reviews[4]} alt="Review" fill className="object-cover" />
              </div>
              <div className="absolute bottom-10 right-[18%] w-[16%] aspect-square rounded-full overflow-hidden border-4 border-[#F7F7F5] z-10 shadow-lg">
                 <Image src={reviews[5]} alt="Review" fill className="object-cover" />
              </div>
           </div>
        </section>

        {/* You might also like */}
        <section className="mt-32">
           <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-serif)] text-center mb-12">You might also like</h2>
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {suggestedPackages.map((pkg, i) => (
                 <div key={pkg.name} className="group cursor-pointer">
                    <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden bg-gray-200 mb-4">
                       <Image src={pkg.img} alt={pkg.name} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                    </div>
                    <div>
                       <h3 className="font-medium text-sm">{pkg.name}</h3>
                       <div className="flex items-center gap-1 mt-2 mb-1">
                          {[...Array(5)].map((_, i) => (
                            <svg key={i} className="w-3 h-3 text-yellow-400 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                          ))}
                          <span className="text-xs text-gray-500 ml-1">({pkg.rating})</span>
                       </div>
                       <div className="flex items-center gap-3">
                         <p className="font-bold text-sm">{pkg.price}</p>
                         <p className="text-gray-400 text-xs line-through">$4,500</p>
                         <span className="bg-red-50 text-red-500 text-[10px] font-bold px-2 py-0.5 rounded-sm">-20%</span>
                       </div>
                    </div>
                 </div>
              ))}
           </div>
        </section>

        {/* Newsletter Footer CTA */}
        <section className="mt-24 mb-12">
           <div className="w-full bg-[#8E9B7A] rounded-[3rem] py-16 px-12 flex flex-col lg:flex-row items-center justify-between gap-12">
              <h2 className="text-3xl md:text-4xl font-light text-white max-w-md font-[family-name:var(--font-serif)]">
                 STAY UPTO DATE ABOUT OUR LATEST OFFERS
              </h2>
              <div className="w-full lg:w-auto flex flex-col gap-4">
                 <div className="relative w-full lg:w-[400px]">
                    <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                       <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                    </div>
                    <input type="email" placeholder="Enter your email here" className="w-full pl-12 pr-4 py-4 rounded-full outline-none text-sm shadow-sm" />
                 </div>
                 <button className="w-full lg:w-[400px] bg-white text-black py-4 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-gray-50 transition shadow-sm">
                    Subscribe to Newsletter
                 </button>
              </div>
           </div>
        </section>
      </main>

      <HomeFooter />
    </div>
  );
}
