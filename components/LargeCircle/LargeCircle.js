import Image from "next/image";
import Button from "../Button/Button";

import styles from "./LargeCircle.module.scss";

export default function LargeCircle({
  imgSrc,
  alt,
  heading,
  para,
  button,
  title,
  path,
  arrowImgSrc,
  addClass,
  isFirst,
  mirrorArrow,
})
{
  return (
    <div
      className={`${styles.largeCircle} ${isFirst ? styles.first : ""} ${addClass ? styles.flipped : ""} ${mirrorArrow ? styles.mirrored : ""}`}
    >
      <div className={styles.arrowContainer}>
        <Image src={arrowImgSrc} fill alt="arrow icon"></Image>
      </div>
      <div
        className={`container ${styles.flex}`}
      >
        <div className={styles.imgContainer}>
          <div className={styles.circleDiv}>
            <Image
              className={styles.img}
              src={imgSrc}
              alt={alt}
              fill
            />
          </div>
        </div>
        <div className={styles.copy}>
          <h2>{heading}</h2>
          <p>{para}</p>
          {button ? <Button title={title} path={path} /> : ""}
        </div>
      </div>
    </div>
  );
}
