import Link from 'next/link'
import Image from 'next/image'

import styles from '../styles/Unlimated.module.css'

function CatalogSection() {
  return (
      <div className={styles.homeherolight}>
        <div className={styles.container}>
          <div className={styles.rowhomereverse}>
            <div className={styles.col}>
              <div className={styles.homeherotextwrappersuper}>
                <div className={styles.topline}><p>EASY SETUP</p></div>
                <h1 className={styles.headtextdark}>
                  Super fast and simple onboarding process
                </h1>
                <p className={styles.homeherosubtitledark}
                >
                  Get everything set up and ready in under 10 minutes. All you need to do is add your information and you're ready to go.
                </p>
                <Link href='/plans'>
                  <a className={styles.herobutton}>
                    Start Now
                  </a>
                </Link>
              </div>
            </div>
            <div className={styles.col}>
              <div className={styles.homeheroimgdivmargin}>
                <Image className={styles.homeheroimg} src="/svg-2.svg" alt="Picture of computer screen with a graph being displayed" 
                       width={520} height={550} />
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default CatalogSection;