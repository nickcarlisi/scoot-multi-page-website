import Image from "next/image";
import Link from "next/link";
import Button from "../Button/Button";

import styles from "./HomeHero.module.scss";

export default function HomeHero(props)
{
  return (
    <section className={styles.hero}>
      {/* <div className={styles.leftLine}>
        <Image
          src="/assets/patterns/right-arrow.svg"
          alt="arrow icon"
          fill
        />
      </div> */}
      <div className={`${styles.heroContent}`}>
        <h1>Scooter sharing made simple</h1>
        <div className={styles.heroCopy}>
          <p>
            Scoot takes the hassle out of urban mobility. Our bikes are placed in
            convenient locations in each of our cities. Use our app to locate the
            nearest bike, unlock it with a tap, and you’re away!
          </p>
        </div>
        <Button title="Get Scootin" path="#signupsection" />
      </div>
      <div className={styles.circles}>
        <Image
          src="/assets/patterns/white-circles.svg"
          alt=""
          fill
        />
      </div>
      <div className={styles.heroImg}>
        <Image
          className={styles.img}
          src="/assets/images/home-hero-desktop.jpg"
          alt="person riding scooter"
          fill
          priority
        />
      </div>
    </section>
  );
}
