import Image from "next/image";

import styles from "./SubHeroIcons.module.scss";

export default function SubHeroIcons(props) {
  return (
    <div className={styles.subHeroIcons}>
      <div className={`${styles.grid}`}>
        <div className={styles.icon}>
          <Image
            className={styles.icon}
            // src="/assets/images/telemetry.jpg"
            // src={props.imgSrc}
            src={props.imgSrc}
            alt={props.alt}
            width={96}
            height={96}
          />
        </div>
        <div className={styles.copy}>
          <h2 className={styles.heading}>{props.heading}</h2>
          <p>{props.para}</p>
        </div>
      </div>
    </div>
  );
}
