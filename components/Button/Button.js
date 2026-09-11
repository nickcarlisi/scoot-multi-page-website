import Link from "next/link";
import styles from "./Button.module.scss";

export default function Button(props) {
  return (
    <button className={styles.btn}>
      <Link href={`${props.path}`}>{props.title}</Link>
    </button>
  );
}
