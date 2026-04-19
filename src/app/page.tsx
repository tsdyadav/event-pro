import HeroBanner from "@/components/home/HeroBanner";
// import { HomeShowcase } from "@/components/home/home-showcase";
import KidsSection from "@/components/home/KidsSection";
import  Footer  from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import BirthdaySection  from "@/components/home/BirthdaySection";
import BirthdayShowcase from "@/components/home/BirthdayShowcase";
import KidsDecorations from "@/components/home/KidsDecorations";
import OccasionSection from "@/components/home/OccasionSection";
import BalloonDecorSection from "@/components/home/BalloonDecorSection";
import StatsSection from "@/components/home/StatsSection";
import WeddingSection from "@/components/home/WeddingSection";
import RooftopSection from "@/components/home/RooftopSection";
import AnniversarySection from "@/components/home/AnniversarySection";
import RomanticSection from "@/components/home/RomanticSection";
import BachelorPartySection from "@/components/home/BachelorPartySection";
import WeddingDecorationSection from "@/components/home/WeddingDecorationSection";

import BridalEntrySection from "@/components/home/BridalEntrySection";
import WeddingDecorSection from "@/components/home/WeddingDecorSection";
import CityCategorySection from "@/components/home/CityCategorySection";
import GallerySection from "@/components/home/GallerySection";
import TestimonialSection from "@/components/home/TestimonialSection";
import FestivalSection from "@/components/home/FestivalSection";

export default function HomePage() {
  return (
    <main className="">
      <Navbar />
      <HeroBanner />
      <KidsSection />
      {/* <HomeShowcase /> */}
      <BirthdaySection />
      <BirthdayShowcase/>
      <KidsDecorations/>
      <OccasionSection/>
      <BalloonDecorSection/>
      <StatsSection/> 
      <WeddingSection/>
      <WeddingDecorationSection/>
      
      <BridalEntrySection/>
      <BachelorPartySection/>
      


      <RomanticSection/>
      <AnniversarySection/>
      <RooftopSection/>
      <FestivalSection/>
      <TestimonialSection/>
       <WeddingDecorSection/>
      {/* <HeroSection/> ispe kaam krna hai */}
      <GallerySection/>
      <CityCategorySection/>
      <Footer />
    </main>
  );
}
