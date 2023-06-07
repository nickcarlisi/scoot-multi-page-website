import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import { useState } from "react";

import FAQ from "../components/FAQ";

import styles from "./FAQSection.module.scss";

export default function FAQSection({ FAQSectionDataHow, FAQSectionDataSafe }) {
  // const FAQSectionData = props.FAQSectionData;

  const [openFirstIndex, setFirstOpenIndex] = useState(null);
  const [openSecondIndex, setSecondOpenIndex] = useState(null);

  const handleFirstClick = (index) => {
    setFirstOpenIndex(index === openFirstIndex ? null : index);
  };

  const handleSecondClick = (index) => {
    setSecondOpenIndex(index === openSecondIndex ? null : index);
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
                isOpen={index === openFirstIndex}
                onClick={() => handleFirstClick(index)}
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
                isOpen={index === openSecondIndex}
                onClick={() => handleSecondClick(index)}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
