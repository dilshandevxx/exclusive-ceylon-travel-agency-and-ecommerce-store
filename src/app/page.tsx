import { AnnouncementBar } from "@/components/home/AnnouncementBar";
import { BelowFold } from "@/components/home/BelowFold";
import { HeroSection } from "@/components/home/HeroSection";
import { HomeFooter } from "@/components/home/HomeFooter";
import { MobileNav } from "@/components/home/MobileNav";

export default function Home() {
  return (
    <>
      <AnnouncementBar />
      <HeroSection />
      <MobileNav variant="hero" />
      <BelowFold />
      <HomeFooter />
    </>
  );
}
