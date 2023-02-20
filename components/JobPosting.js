import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import { useState } from "react";
import styles from "./JobPosting.module.scss";

export default function JobPosting(props) {
  return (
    <div>
      <h3>{props.title}</h3>
      <h4>{props.location}</h4>
    </div>
  );
}
