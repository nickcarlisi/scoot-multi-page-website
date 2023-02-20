import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

import SmallCircle from "../components/SmallCircle";

import styles from "./SmallCircleSection.module.scss";

export default function SmallCircleSection(props) {
  const smallCircleData = props.smallCircleData;

  return (
    <section className={styles.smallCircleSection}>
      <h3>{props.header}</h3>
      <div className={styles.smallCircleFlex}>
        {smallCircleData.map((data, i) => {
          return (
            <SmallCircle
              key={i}
              imgSrc={data.imgSrc}
              alt={data.alt}
              heading={data.heading}
              para={data.para}
              number={data.number}
            />
          );
        })}
      </div>
    </section>
  );
}
