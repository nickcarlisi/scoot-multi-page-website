import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

import LargeCircle from "../components/LargeCircle";

import styles from "./LargeCircleSection.module.scss";

export default function LargeCircleSection(props) {
  const largeCircleData = props.largeCircleData;

  return (
    <section className={styles.largeCircleSection}>
      {/* <img src="/assets/patterns/line.svg"></img> */}
      {largeCircleData.map((data, i) => {
        return (
          <LargeCircle
            key={i}
            imgSrc={data.imgSrc}
            alt={data.alt}
            heading={data.heading}
            para={data.para}
            button={data.button}
            title={data.title}
            path={data.path}
            addClass={`${i % 2 === 1 ? true : ""}`}
          />
        );
      })}
      {/* </div> */}
    </section>
  );
}
