import Image from "next/image";
import Link from "next/link";
import Button from "../Button/Button";

import styles from "./LargeCircle.module.scss";

export default function LargeCircle(props) {
  console.log(props.imgSrc);
  console.log(props.arrowImgSrc);
  const addClass = props.addClass;

  return (
    <div className={styles.largeCircle}>
      <img className={styles.arrow} src={props.arrowImgSrc}></img>
      <div
        className={`container ${styles.flex} ${addClass ? styles.test : ""}`}
      >
        <div className={styles.imgContainer}>
          <div className={styles.circleDiv}>
            <Image
              className={styles.img}
              // src="/assets/images/telemetry.jpg"
              src={props.imgSrc}
              alt={props.alt}
              fill
            />
          </div>
        </div>
        <div className={styles.copy}>
          <h2>{props.heading}</h2>
          <p>{props.para}</p>
          {props.button ? <Button title={props.title} path={props.path} /> : ""}
        </div>
      </div>
    </div>
  );
}
