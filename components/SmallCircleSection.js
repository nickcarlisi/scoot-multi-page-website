import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

import SmallCircle from "../components/SmallCircle";

import styles from "./SmallCircleSection.module.scss";

export default function SmallCircleSection(props) {
  const smallCircleData = props.smallCircleData;

  return (
    <section className={styles.SmallCircleSection}>
      <h3>{props.header}</h3>
      {smallCircleData.map((data, i) => {
        return (
          <SmallCircle
            key={i}
            imgSrc={data.imgSrc}
            alt={data.alt}
            heading={data.heading}
            para={data.para}
          />
        );
      })}
      {/* </div> */}
    </section>
  );
}
