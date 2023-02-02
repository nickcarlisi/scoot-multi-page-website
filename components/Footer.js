import Image from "next/image";
import Link from "next/link";

import styles from "./Footer.module.scss";

export default function Footer(props) {
  return (
    <footer className={styles.footer}>
      <nav>
        <div className={`container ${styles.navFlex}`}>
          <div className={styles.logoAndLinks}>
            <div className={styles.navLogo}>
              <Link href="/">
                <Image
                  src="/assets/logo-white.svg"
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

          <div>
            {/* <button className={styles.btn}>Get Scootin'</button> */}
            <ul className={styles.navSocials}>
              <li>
                <a href="javascript:;">
                  <Image
                    src="/assets/icons/facebook.svg"
                    width={24}
                    height={24}
                    alt="Facebook logo"
                  />
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <Image
                    src="/assets/icons/twitter.svg"
                    width={24}
                    height={20}
                    alt="Twitter logo"
                  />
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <Image
                    src="/assets/icons/instagram.svg"
                    width={24}
                    height={24}
                    alt="Instagram logo"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </footer>
  );
}
