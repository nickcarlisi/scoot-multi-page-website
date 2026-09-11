import InnerPageHeader from "@/components/InnerPageHeader/InnerPageHeader";
import LargeCircleSection from "@/components/LargeCircleSection/LargeCircleSection";
import SmallCircleSection from "@/components/SmallCircleSection/SmallCircleSection";
import FAQSection from "@/components/FAQSection/FAQSection";
import SignUpSection from "@/components/SignUpSection/SignUpSection";
import { largeCircleDataAbout } from "@/data/largeCircleData";
import { smallCircleData } from "@/data/smallCircleData";
import { FAQDataHow, FAQDataSafe } from "@/data/FAQData";

export const metadata = {
  title: "About",
};

export default function About() {
  return (
    <>
      <InnerPageHeader
        title="About"
        imgSrc="/assets/images/about-hero-desktop.jpg"
        alt="placeholder"
      />
      <LargeCircleSection largeCircleData={largeCircleDataAbout} />
      <SmallCircleSection
        header="Our values"
        smallCircleData={smallCircleData}
      />
      <FAQSection
        FAQSectionDataHow={FAQDataHow}
        FAQSectionDataSafe={FAQDataSafe}
      />
      <SignUpSection />
    </>
  );
}
