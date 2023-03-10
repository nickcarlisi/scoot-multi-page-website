import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";

import Layout from "../components/Layout";
import HomeHero from "../components/HomeHero";
import SubHeroIcons from "../components/SubHeroIcons";
import LargeCircle from "../components/LargeCircle";
import { largeCircleDataHome } from "../data/largeCircleData";
import { subHeroIconsData } from "../data/subHeroIconsData";
import SubHeroSection from "../components/SubHeroSection";
import LargeCircleSection from "../components/LargeCircleSection";
import SignUpSection from "../components/SignUpSection";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Scoot</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <HomeHero />
        <SubHeroSection />
        <LargeCircleSection largeCircleData={largeCircleDataHome} />
        <SignUpSection />
      </Layout>
    </>
  );
}
