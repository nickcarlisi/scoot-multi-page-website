import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import { useState } from "react";

import FAQ from "../components/FAQ";

import styles from "./FAQSection.module.scss";

export default function FAQSection({ FAQSectionDataHow, FAQSectionDataSafe }) {
  // const FAQSectionData = props.FAQSectionData;

  const [openIndex, setOpenIndex] = useState(null);

  const handleClick = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <section className={styles.FAQSection}>
      <h2 className={styles.lrgHeader}>FAQs</h2>
      <div className={styles.FAQFlex}>
        <div className={styles.flexChild1}>
          <h3 className={styles.subHeader}>How it works</h3>
        </div>
        <div className={styles.flexChild2}>
          {FAQSectionDataHow.map((data, index) => {
            return (
              <FAQ
                key={index}
                question={data.question}
                answer={data.answer}
                isOpen={index === openIndex}
                onClick={() => handleClick(index)}
              />
            );
          })}
        </div>
      </div>
      <div className={styles.FAQFlex}>
        <div className={styles.flexChild1}>
          <h3 className={styles.subHeader}>Safe Driving</h3>
        </div>
        <div className={styles.flexChild2}>
          {FAQSectionDataSafe.map((data, index) => {
            return (
              <FAQ
                key={index}
                question={data.question}
                answer={data.answer}
                isOpen={index === openIndex}
                onClick={() => handleClick(index)}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
