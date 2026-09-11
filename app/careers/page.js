import InnerPageHeader from "@/components/InnerPageHeader/InnerPageHeader";
import LargeCircleSection from "@/components/LargeCircleSection/LargeCircleSection";
import SmallCircleSection from "@/components/SmallCircleSection/SmallCircleSection";
import JobPostingSection from "@/components/JobPostingSection/JobPostingSection";
import SignUpSection from "@/components/SignUpSection/SignUpSection";
import { largeCircleDataCareers } from "@/data/largeCircleData";
import { smallCircleData } from "@/data/smallCircleData";
import { jobPostingData } from "@/data/jobPostingData";

export const metadata = {
  title: "Careers",
};

export default function Careers() {
  return (
    <>
      <InnerPageHeader
        title="Careers "
        imgSrc="/assets/images/careers-locations-hero-desktop.jpg"
        alt="placeholder"
      />
      <LargeCircleSection largeCircleData={largeCircleDataCareers} />
      <SmallCircleSection
        header="Why join us?"
        smallCircleData={smallCircleData}
      />
      <JobPostingSection jobPostingData={jobPostingData} />
      <SignUpSection />
    </>
  );
}
