import Link from 'next/link'
import Image from 'next/image'

import styles from '../styles/Unlimated.module.css'

function ProtectedSection() {
  return (
      <div className={styles.homehero}>
        <div className={styles.container}>
          <div className={styles.rowhome}>
            <div className={styles.col}>
              <div className={styles.homeherotextwrapper}>
                <div className={styles.topline}><p>100% SECURE</p></div>
                <h1 className={styles.headtext}>
                  Stay protected 24/7 anywhere anytime
                </h1>
                <p className={styles.homeherosubtitle}
                >
                  We have you covered no matter where you are located. Over 140 locations worldwide to ensure you have access anytime
                </p>
                <Link href='/'>
                  <a className={styles.herobutton}>
                    Learn More
                  </a>
                </Link>
              </div>
            </div>
            <div className={styles.col}>
              <div className={styles.homeheroimgdiv}>
                <Image className={styles.homeheroimg} src="/svg-5.svg" alt="Picture of a Vault" 
                       width={550} height={550} />
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default ProtectedSection;