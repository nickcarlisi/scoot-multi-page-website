import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import { useState } from "react";

import JobPosting from "./JobPosting";

import styles from "./JobPostingSection.module.scss";

export default function JobPostingSection({ jobPostingData }) {
  // const FAQSectionData = props.FAQSectionData;

  return (
    <section className={`container ${styles.JobPostingSection}`}>
      <div>
        {jobPostingData.map((data, index) => {
          return (
            <JobPosting
              key={index}
              title={data.title}
              location={data.location}
            />
          );
        })}
      </div>
    </section>
  );
}
