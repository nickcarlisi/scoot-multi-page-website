import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

import SubHeroIcons from "../components/SubHeroIcons";
import { subHeroIconsData } from "../data/subHeroIconsData";

import styles from "./SubHeroSection.module.scss";

export default function SubHeroSection(props) {
  return (
    <section className={styles.SubHeroSection}>
      {/* <div className={styles.greyline}></div> */}
      <div className={styles.subHeroContainer}>
        {subHeroIconsData.map((data, i) => {
          return (
            <SubHeroIcons
              key={i}
              imgSrc={data.imgSrc}
              alt={data.alt}
              heading={data.heading}
              para={data.para}
            />
          );
        })}
      </div>
    </section>
  );
}
