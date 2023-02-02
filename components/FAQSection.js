import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import { useState } from "react";

import FAQ from "../components/FAQ";

import styles from "./FAQSection.module.scss";

export default function FAQSection({ FAQSectionData }) {
  // const FAQSectionData = props.FAQSectionData;

  const [openIndex, setOpenIndex] = useState(null);

  const handleClick = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <section className={styles.FAQSection}>
      {FAQSectionData.map((data, index) => {
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
    </section>
  );
}
