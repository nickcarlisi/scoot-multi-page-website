import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import { useState } from "react";
import styles from "./FAQ.module.scss";

export default function FAQ({ onClick, question, isOpen, answer }) {
  return (
    <div className={`container ${styles.FAQ}`} onClick={onClick}>
      <div className={styles.copy}>
        <div className={styles.headerFlex}>
          <h2>{question}</h2>
          <div className={styles.arrowContainer}>
            <Image
              src="/assets/icons/chevron.svg"
              height={12}
              width={18}
              className={`${styles.arrow} ${isOpen && styles.rotate}`}
            />
          </div>
        </div>

        <p className={`${isOpen && styles.show}`}>{answer}</p>
      </div>
    </div>
  );
}
