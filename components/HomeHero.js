import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

import styles from "./HomeHero.module.scss";

export default function HomeHero(props) {
  return (
    <section className={styles.hero}>
      <div className={`container ${styles.heroContent}`}>
        <h1>Scooter sharing made simple</h1>
        <p>
          Scoot takes the hassle out of urban mobility. Our bikes are placed in
          convenient locations in each of our cities. Use our app to locate the
          nearest bike, unlock it with a tap, and you’re away!
        </p>
        <Button title="Get Scootin" path="#signupsection" />
      </div>
      <div className={styles.arrow}>
        <Image
          src="/assets/patterns/right-arrow.svg"
          alt="arrow icon"
          width={452}
          height={151}
          // layout="fill"
          // objectFit="cover"
          // rel="preload"
          // priority={true}
        />
      </div>
      <div className={styles.circles}>
        <Image
          src="/assets/patterns/white-circles.svg"
          alt="arrow icon"
          width={234}
          height={63}
          // layout="fill"
          // objectFit="cover"
          // rel="preload"
          // priority={true}
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
