import Image from "next/image";

import styles from "./SignUpSection.module.scss";

export default function SignUpSection(props)
{
  return (
    <section className={styles.signUpSection} id="signupsection">
      <div className={`container ${styles.flex}`}>
        <div className={styles.copy}>
          <h2 className={styles.heading}>Sign up and Scoot off today</h2>
        </div>
        <div className={styles.icons}>
          <div className={styles.icon}>
            <Image
              className={styles.icon}
              src="/assets/icons/app-store.svg"
              // alt={props.alt}
              alt="alt text"
              fill
            />
          </div>

          <div className={styles.icon}>
            <Image
              className={styles.icon}
              src="/assets/icons/google-play.svg"
              // alt={props.alt}
              alt="alt text"
              fill
            />
          </div>
        </div>
      </div>
    </section>
  );
}
