import Head from "next/head";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";

import Layout from "../components/Layout";
import InnerPageHeader from "../components/InnerPageHeader";
import LargeCircleSection from "../components/LargeCircleSection";
import SmallCircleSection from "../components/SmallCircleSection";
import FAQSection from "../components/FAQSection";
import SignUpSection from "../components/SignUpSection";

import { largeCircleDataAbout } from "../data/largeCircleData";
import { smallCircleData } from "../data/smallCircleData";
import { FAQDataHow, FAQDataSafe } from "../data/FAQData";

const inter = Inter({ subsets: ["latin"] });

export default function About() {
  return (
    <>
      <Head>
        <title>Scoot</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <InnerPageHeader
          title="About"
          imgSrc="/assets/images/about-hero-desktop.jpg"
          alt="placeholder"
        />
        <LargeCircleSection largeCircleData={largeCircleDataAbout} />
        <SmallCircleSection
          header={"Our values"}
          smallCircleData={smallCircleData}
        />
        <FAQSection
          FAQSectionDataHow={FAQDataHow}
          FAQSectionDataSafe={FAQDataSafe}
        />
        <SignUpSection />
      </Layout>
    </>
  );
}
