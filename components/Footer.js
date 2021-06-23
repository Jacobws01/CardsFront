import Link from 'next/link'
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
} from 'react-icons/fa';
import { AiOutlineCreditCard } from 'react-icons/ai'

import styles from '../styles/Footer.module.css'

function Footer() {
  return (
    <div className={styles.footercontainer}>
      <section className={styles.footersubscription}>
        <p className={styles.footersubscriptionheading}>
          Join our exclusive membership to receive the latest news and trends
        </p>
        <p className={styles.footersubscriptiontext}>
          You can unsubscribe at any time.
        </p>
        <div className={styles.inputareas}>
          <form>
            <input
              className={styles.footerinput}
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <a href="/" className={styles.footerbtn}>Subscribe</a>
          </form>
        </div>
      </section>
      <div className={styles.footerlinks}>
        <div className={styles.footerlinkwrapper}>
          <div className={styles.footerlinkitems}>
            <h2>About Us</h2>
            <Link href="/">
            <a>How it works</a>
            </Link>
            <Link href="/">
            <a>Testimonials</a>
            </Link>
            <Link href="/">
            <a>Careers</a>
            </Link>
            <Link href="/">
            <a>Investors</a>
            </Link>
            <Link href="/">
            <a>Terms of Service</a>
            </Link>
          </div>
          <div className={styles.footerlinkitems}>
            <h2>Contact Us</h2>
            <Link href="/">
            <a>Contact</a>
            </Link>
            <Link href="/">
            <a>Support</a>
            </Link>
            <Link href="/">
            <a>Destinations</a>
            </Link>
            <Link href="/">
            <a>Sponsorships</a>
            </Link>
          </div>
        </div>
        <div className={styles.footerlinkwrapper}>
          <div className={styles.footerlinkitems}>
            <h2>Videos</h2>
            <Link href="/">
            <a>Submit Video</a>
            </Link>
            <Link href="/">
            <a>Ambassadors</a>
            </Link>
            <Link href="/">
            <a>Agency</a>
            </Link>
            <Link href="/">
            <a>Influencer</a>
            </Link>
          </div>
          <div className={styles.footerlinkitems}>
            <h2>Social Media</h2>
            <Link href="/">
            <a>Instagram</a>
            </Link>
            <Link href="/">
            <a>Facebook</a>
            </Link>
            <Link href="/">
            <a>Youtube</a>
            </Link>
            <Link href="/">
            <a>Twitter</a>
            </Link>
          </div>
        </div>
      </div>
      <section className={styles.socialmedia}>
        <div className={styles.socialmediawrap}>
          <div className={styles.footerlogo}>
            <a  className={styles.sociallogo}>
              <AiOutlineCreditCard className={styles.navbaricon} />
              Cards
            </a>
          </div>
          <small className={styles.websiterights}>Cards © 2020</small>
          <div className={styles.socialicons}>
            <a
              className={styles.socialiconlink}
              href="/"
              target='_blank'
              aria-label='Facebook'
            >
              <FaFacebook />
            </a>
            <a
              className={styles.socialiconlink}
              href="/"
              target='_blank'
              aria-label='Instagram'
            >
              <FaInstagram />
            </a>
            <a
              className={styles.socialiconlink}
              href="/"
              target='_blank'
              aria-label='Youtube'
            >
              <FaYoutube />
            </a>
            <a
              className={styles.socialiconlink}
              href="/"
              target='_blank'
              aria-label='Twitter'
            >
              <FaTwitter />
            </a>
            <a
              className={styles.socialiconlink}
              href="/"
              target='_blank'
              aria-label='aedIn'
            >
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;