import HomeHero from "@/components/HomeHero/HomeHero";
import SubHeroSection from "@/components/SubHeroSection/SubHeroSection";
import LargeCircleSection from "@/components/LargeCircleSection/LargeCircleSection";
import SignUpSection from "@/components/SignUpSection/SignUpSection";
import { largeCircleDataHome } from "@/data/largeCircleData";

export default function Home() {
  return (
    <>
      <HomeHero />
      <SubHeroSection />
      <LargeCircleSection largeCircleData={largeCircleDataHome} />
      <SignUpSection />
    </>
  );
}
