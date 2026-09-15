import LargeCircle from "../LargeCircle/LargeCircle";
import styles from "./LargeCircleSection.module.scss";

export default function LargeCircleSection(props)
{
  const largeCircleData = props.largeCircleData;

  return (
    <section className={styles.largeCircleSection}>
      {largeCircleData.map((data, i) => (
        <LargeCircle
          key={i}
          {...data}
          addClass={i % 2 === 1}
          isFirst={i === 0}
        />
      ))}
    </section>
  );
}
