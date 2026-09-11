import Image from "next/image";
import styles from "./InnerPageHeader.module.scss";

export default function InnerPageHeader(props) {
  return (
    <div className={styles.innerPageHeader}>
      <div className={`container ${styles.flex}`}>
        <h1 className={styles.title}>{props.title}</h1>
      </div>
      <div className={styles.headerImg}>
        <Image
          className={styles.img}
          src={props.imgSrc}
          alt={props.alt}
          fill
          priority
        />
      </div>
    </div>
  );
}
