import Link from 'next/link'
import Image from 'next/image'

import styles from '../styles/Unlimated.module.css'

function UnlimitedSection() {
  return (
      <div className={styles.homehero}>
        <div className={styles.container}>
          <div className={styles.rowhome}>
            <div className={styles.col}>
              <div className={styles.homeherotextwrapper}>
                <div className={styles.topline}><p>Exclusive Access</p></div>
                <h1 className={styles.headtext}>
                  Unlimited Transactions with zero fees
                </h1>
                <p className={styles.homeherosubtitle}
                >
                  Get access to our exclusive premium card that allows you to send unlimited transactions without any fees
                </p>
                <Link href='/login'>
                  <a className={styles.herobutton}>
                    Get Started
                  </a>
                </Link>
              </div>
            </div>
            <div className={styles.col}>
              <div className={styles.homeheroimgdiv}>
                <Image className={styles.homeheroimg} src="/svg-1.svg" alt="Picture of credit cards" 
                       width={550} height={550} />
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default UnlimitedSection;
