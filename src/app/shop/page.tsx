import { AnnouncementBar } from "@/components/home/AnnouncementBar";
import { HomeFooter } from "@/components/home/HomeFooter";
import { MobileNav } from "@/components/home/MobileNav";
import { InnerHeader } from "@/components/layout/InnerHeader";
import { ShopCatalog } from "@/components/shop/ShopCatalog";
import { ShopHero } from "@/components/shop/ShopHero";

export default function TravelShopPage() {
  return (
    <>
      <div className="sticky top-0 z-50">
        <AnnouncementBar />
        <InnerHeader activeHref="/shop" />
      </div>

      <main>
        <ShopHero />
        <div className="mx-auto max-w-[1600px] px-5 py-14 md:px-10 md:py-20">
          <ShopCatalog />
        </div>
      </main>

      <MobileNav variant="page" activeHref="/shop" />
      <HomeFooter />
    </>
  );
}
