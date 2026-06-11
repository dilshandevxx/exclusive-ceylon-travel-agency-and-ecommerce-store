import Image from "next/image";
import Link from "next/link";
import { Heart, ArrowRight } from "lucide-react";
import { HomeFooter } from "@/components/home/HomeFooter";
import { InnerHeader } from "@/components/layout/InnerHeader";

const categories = [
  { name: "Ceylon Tea", img: "https://images.unsplash.com/photo-1576092762791-dd9e2220abd4?auto=format&fit=crop&w=600&q=80" },
  { name: "Spices", img: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=600&q=80" },
  { name: "Linen Apparel", img: "https://images.unsplash.com/photo-1598554747436-c9293d6a588f?auto=format&fit=crop&w=600&q=80" },
  { name: "Jewelry", img: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=600&q=80" },
];

const popularProducts = [
  { name: "Silver Tips White Tea", price: "$45", img: "https://images.unsplash.com/photo-1563822249548-9a72b6353cd1?auto=format&fit=crop&w=600&q=80", color: "bg-[#e5e5e5]" },
  { name: "Linen Safari Shirt", price: "$125", img: "https://images.unsplash.com/photo-1596755094514-f87e32f85e23?auto=format&fit=crop&w=600&q=80", color: "bg-[#f2efe9]" },
  { name: "Artisan Clay Pot", price: "$85", img: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&w=600&q=80", color: "bg-[#e2e2e2]" },
  { name: "Ceylon Cinnamon Quills", price: "$28", img: "https://images.unsplash.com/photo-1608933200779-19ecac720e5e?auto=format&fit=crop&w=600&q=80", color: "bg-[#f8f8f8]" },
  { name: "Woven Beach Tote", price: "$95", img: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=600&q=80", color: "bg-[#eaeaea]" },
  { name: "Blue Sapphire Pendant", price: "$450", img: "https://images.unsplash.com/photo-1599643478514-4a11b15136ff?auto=format&fit=crop&w=600&q=80", color: "bg-[#f0f0f0]" },
  { name: "Cardamom Pods", price: "$22", img: "https://images.unsplash.com/photo-1601614051010-43ee7d4c98bc?auto=format&fit=crop&w=600&q=80", color: "bg-[#ede2d6]" },
];

const suggestedProducts = [
  { name: "Premium Earl Grey", rating: "4.9", price: "$35", oldPrice: "$45", discount: "-20%", img: "https://images.unsplash.com/photo-1594631252845-29fc4cc8cbf9?auto=format&fit=crop&w=600&q=80" },
  { name: "Hand-rolled Oolong", rating: "4.8", price: "$65", oldPrice: "", discount: "", img: "https://images.unsplash.com/photo-1545665277-5937489579f2?auto=format&fit=crop&w=600&q=80" },
  { name: "Linen Summer Trousers", rating: "5.0", price: "$140", oldPrice: "", discount: "", img: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=600&q=80" },
  { name: "Vintage Brass Compass", rating: "4.7", price: "$120", oldPrice: "$150", discount: "-20%", img: "https://images.unsplash.com/photo-1517406214227-22709e9f6560?auto=format&fit=crop&w=600&q=80" },
];

export default function ShopPage() {
  return (
    <div className="min-h-screen bg-[#F7F7F5] font-sans text-[#1A1A1A]">
      {/* Use the exact same navigation as the rest of the site (InnerHeader for light bg) */}
      <div className="sticky top-0 z-50">
        <InnerHeader activeHref="/shop" />
      </div>

      <main className="px-4 py-6 md:px-12 max-w-[1800px] mx-auto mt-4">
        {/* Hero Section */}
        <div className="grid gap-4 lg:grid-cols-2 lg:grid-rows-2 h-[800px]">
           {/* Main Hero Image */}
           <div className="relative col-span-1 lg:col-span-2 row-span-1 lg:row-span-1 h-[400px] lg:h-[500px] rounded-[2.5rem] overflow-hidden group bg-[#E3E1DE]">
              <Image 
                src="https://images.unsplash.com/photo-1564758564527-b97d79cbbaea?auto=format&fit=crop&w=1600&q=80" 
                alt="Summer Arrival" 
                fill 
                className="object-cover object-center opacity-80 mix-blend-multiply transition-transform duration-[3s] group-hover:scale-105" 
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
                 <h1 className="text-5xl md:text-7xl font-light mb-4 drop-shadow-md font-[family-name:var(--font-serif)]">The Lifestyle Studio</h1>
                 <p className="max-w-md text-sm md:text-base font-medium drop-shadow-md mb-8 opacity-90">Discover our curated collection of authentic island craftsmanship and premium goods.</p>
                 <button className="flex items-center gap-3 bg-white text-black px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-gray-100 transition shadow-lg">
                    Explore Collection
                    <span className="w-6 h-6 rounded-full bg-black flex items-center justify-center text-white">
                       <ArrowRight className="w-3 h-3" />
                    </span>
                 </button>
              </div>
           </div>
           
           {/* Sub Hero 1 */}
           <div className="relative col-span-1 h-[250px] lg:h-auto rounded-[2.5rem] overflow-hidden bg-[#EAE4DF] group flex flex-col justify-end p-10">
              <Image src="https://images.unsplash.com/photo-1576092762791-dd9e2220abd4?auto=format&fit=crop&w=800&q=80" alt="Tea" fill className="object-cover opacity-60 mix-blend-multiply transition-transform duration-[3s] group-hover:scale-105" />
              <div className="relative z-10 flex items-end justify-between w-full">
                 <h2 className="text-3xl max-w-[200px] text-[#1A1A1A] font-[family-name:var(--font-serif)] leading-tight">Handpicked Ceylon Tea</h2>
                 <button className="bg-white text-black px-6 py-2.5 rounded-full text-xs font-bold shadow-sm hover:bg-gray-50 transition">Shop Now</button>
              </div>
           </div>

           {/* Sub Hero 2 */}
           <div className="relative col-span-1 h-[250px] lg:h-auto rounded-[2.5rem] overflow-hidden bg-[#E2DFE1] group flex flex-col justify-end p-10">
              <Image src="https://images.unsplash.com/photo-1598554747436-c9293d6a588f?auto=format&fit=crop&w=800&q=80" alt="Linen" fill className="object-cover opacity-60 mix-blend-multiply transition-transform duration-[3s] group-hover:scale-105" />
              <div className="relative z-10 flex items-end justify-between w-full">
                 <h2 className="text-3xl max-w-[200px] text-[#1A1A1A] font-[family-name:var(--font-serif)] leading-tight">Authentic Linen Apparel</h2>
                 <button className="bg-white text-black px-6 py-2.5 rounded-full text-xs font-bold shadow-sm hover:bg-gray-50 transition">Shop Now</button>
              </div>
           </div>
        </div>

        {/* Categories Section */}
        <section className="mt-20">
           <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl md:text-3xl font-[family-name:var(--font-serif)]">Browse by categories</h2>
              <div className="hidden md:flex bg-white rounded-full p-1 border border-gray-200 shadow-sm">
                 <button className="px-6 py-2 rounded-full bg-black text-white text-[10px] font-bold uppercase tracking-wider">All</button>
                 <button className="px-6 py-2 rounded-full text-gray-500 text-[10px] font-bold uppercase tracking-wider hover:bg-gray-50">Tea</button>
                 <button className="px-6 py-2 rounded-full text-gray-500 text-[10px] font-bold uppercase tracking-wider hover:bg-gray-50">Spices</button>
                 <button className="px-6 py-2 rounded-full text-gray-500 text-[10px] font-bold uppercase tracking-wider hover:bg-gray-50">Gems</button>
              </div>
           </div>
           <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {categories.map((cat, i) => (
                 <div key={cat.name} className="relative aspect-[4/3] rounded-3xl overflow-hidden group bg-[#EAEAEA] cursor-pointer">
                    <Image src={cat.img} alt={cat.name} fill className="object-cover mix-blend-multiply transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-5 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-sm">
                       {cat.name}
                    </div>
                 </div>
              ))}
           </div>
        </section>

        {/* Popular Products */}
        <section className="mt-24">
           <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl md:text-3xl font-[family-name:var(--font-serif)]">Curated products</h2>
              <div className="hidden md:flex bg-white rounded-full p-1 border border-gray-200 shadow-sm">
                 <button className="px-5 py-2 rounded-full bg-black text-white text-[10px] font-bold uppercase tracking-wider">All</button>
                 <button className="px-5 py-2 rounded-full text-gray-500 text-[10px] font-bold uppercase tracking-wider hover:bg-gray-50">New</button>
                 <button className="px-5 py-2 rounded-full text-gray-500 text-[10px] font-bold uppercase tracking-wider hover:bg-gray-50">Best Sellers</button>
              </div>
           </div>
           
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
              {popularProducts.map((pkg, i) => (
                 <div key={pkg.name} className={`group cursor-pointer ${i === 1 ? 'lg:col-span-2' : ''}`}>
                    <div className={`relative ${i === 1 ? 'aspect-[2/1]' : 'aspect-square'} rounded-[2rem] overflow-hidden ${pkg.color} mb-4`}>
                       <Image src={pkg.img} alt={pkg.name} fill className="object-cover p-8 mix-blend-multiply transition-transform duration-700 group-hover:scale-105" />
                       <button className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/5 flex items-center justify-center hover:bg-white transition shadow-sm">
                          <Heart className={`w-4 h-4 ${i === 0 ? 'text-red-500 fill-red-500' : 'text-gray-400'}`} />
                       </button>
                    </div>
                    <div>
                       <h3 className="font-bold text-[15px]">{pkg.name}</h3>
                       <p className="text-gray-500 text-sm mt-1">{pkg.price}</p>
                    </div>
                 </div>
              ))}
           </div>
        </section>

        {/* Exclusive Offers Banner */}
        <section className="mt-24">
           <div className="w-full bg-[#E5CDC5] rounded-[3rem] py-20 px-6 text-center flex flex-col items-center justify-center">
              <span className="border border-black/20 rounded-full px-5 py-1.5 text-[9px] font-bold uppercase tracking-[0.2em] mb-6">Offers</span>
              <h2 className="text-3xl md:text-5xl font-[family-name:var(--font-serif)] font-light leading-tight mb-8">
                 EXCLUSIVE SHOP OFFERS <br /> FOR OUR TRAVELERS
              </h2>
              <button className="flex items-center gap-3 bg-white text-black px-6 py-3 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-gray-50 transition shadow-sm">
                 Discover Offers
                 <span className="w-5 h-5 rounded-full bg-black flex items-center justify-center text-white">
                    <ArrowRight className="w-3 h-3" />
                 </span>
              </button>
           </div>
        </section>

        {/* You might also like */}
        <section className="mt-32">
           <h2 className="text-3xl md:text-4xl text-center mb-12 font-[family-name:var(--font-serif)]">You might also like</h2>
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {suggestedProducts.map((pkg, i) => (
                 <div key={pkg.name} className="group cursor-pointer">
                    <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden bg-[#F2F2F2] mb-4">
                       <Image src={pkg.img} alt={pkg.name} fill className="object-cover mix-blend-multiply transition-transform duration-700 group-hover:scale-105" />
                    </div>
                    <div>
                       <h3 className="font-bold text-sm">{pkg.name}</h3>
                       <div className="flex items-center gap-1 mt-2 mb-1">
                          {[...Array(5)].map((_, i) => (
                            <svg key={i} className="w-3 h-3 text-yellow-400 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                          ))}
                          <span className="text-xs text-gray-500 font-bold ml-1">{pkg.rating}</span>
                       </div>
                       <div className="flex items-center gap-3">
                         <p className="font-bold text-sm">{pkg.price}</p>
                         {pkg.oldPrice && <p className="text-gray-400 text-xs line-through">{pkg.oldPrice}</p>}
                         {pkg.discount && <span className="bg-red-50 text-red-500 text-[10px] font-bold px-2 py-0.5 rounded-sm">{pkg.discount}</span>}
                       </div>
                    </div>
                 </div>
              ))}
           </div>
        </section>

        {/* Newsletter Footer CTA */}
        <section className="mt-24 mb-12">
           <div className="w-full bg-[#8E9B7A] rounded-[3rem] py-16 px-12 flex flex-col lg:flex-row items-center justify-between gap-12">
              <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-serif)] text-white max-w-sm leading-tight">
                 STAY UPTO DATE ABOUT OUR LATEST OFFERS
              </h2>
              <div className="w-full lg:w-auto flex flex-col gap-4">
                 <div className="relative w-full lg:w-[400px]">
                    <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                       <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                    </div>
                    <input type="email" placeholder="Enter your email here" className="w-full pl-12 pr-4 py-4 rounded-full outline-none text-sm shadow-sm" />
                 </div>
                 <button className="w-full lg:w-[400px] bg-white text-black py-4 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-gray-50 transition shadow-sm">
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
