import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import { useState } from "react";
import styles from "./JobPosting.module.scss";

export default function JobPosting(props) {
  return (
    <div className={styles.jobPosting}>
      <div className={styles.jobPostingFlex}>
        <div className={styles.flexChild1}>
          <h3 className={styles.title}>{props.title}</h3>
          <p className={styles.location}>{props.location}</p>
        </div>
        <div className={styles.flexChild2}>
          <Button title={"Apply"} />
        </div>
      </div>
    </div>
  );
}
