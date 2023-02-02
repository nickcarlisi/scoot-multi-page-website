import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

import styles from "./Header.module.scss";

export default function Header(props) {
  return (
    <header className={styles.header}>
      <nav>
        <div className={`container ${styles.navFlex}`}>
          <div className={styles.hamburger}>
            <Image
              src="/assets/icons/hamburger.svg"
              width={20}
              height={16}
              alt="hamburger menu"
            ></Image>
          </div>
          <div className={styles.logoAndLinks}>
            <div className={styles.navLogo}>
              <Link href="/">
                <Image
                  src="/assets/logo.svg"
                  width={108}
                  height={29}
                  alt="Scoot logo"
                ></Image>
              </Link>
            </div>
            <div>
              <ul className={styles.navLinks}>
                <li>
                  <Link href="/about">About</Link>
                </li>
                <li>
                  <Link href="/locations">Locations</Link>
                </li>
                <li>
                  <Link href="/careers">Careers</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className={styles.btnContainer}>
            <Button title="Get Scootin" path="#signupsection" />
          </div>
        </div>
      </nav>
    </header>
  );
}
