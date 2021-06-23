import Head from 'next/head'
import Link from 'next/link'
import UnlimatedSection from '../components/Unlimated'
import SuperSection from '../components/Super'
import ProtectedSection from '../components/Protected'
import TransactionSection from '../components/Transactions'
import { fromImageToUrl, API_URL } from '../utils/urls'
import { FaFire } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';
import { GiCrystalize } from 'react-icons/gi';
import Buybutton from '../components/Buybutton'
import Buybutton2 from '../components/Buybutton2'


import styles from '../styles/Products.module.css'

export default function Home({ products, productsmed, productslarge }) {
  return (
    <div>
      <Head>
        <title>Cards</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <UnlimatedSection />
      <SuperSection />
      <ProtectedSection />
      <div className={styles.pricingsection}>
        <div className={styles.pricingwrapper}>
          <h1 className={styles.pricingheading}>Pricing</h1>
          <div className={styles.pricingcontainer}>
           {products.map(product => (
           <div key={product.name}>
            <div className={styles.pricingcontainercard}>
              <div className={styles.pricingcontainercardinfo}>
                <div className={styles.icon}>
                  <FaFire />
                </div>
                <h3>{product.name}</h3>
                <h4>${product.price}</h4>
                <p>{product.permonth}</p>
                <ul className={styles.pricingcontainerfeatures}>
                  <li>{product.Transactions} Transactions</li>
                  <li>{product.cashback}% Cash Back</li>
                  <li>${product.Limit} Limit</li>
                </ul>

                <Buybutton product={product} />

              </div>
             </div>
             </div>
             ))}
        {productsmed.map(product => (
           <div key={product.name}>
            <div className={styles.pricingcontainercardmiddle}>
              <div className={styles.pricingcontainercardinfo}>
                <div className={styles.icon}>
                  <SiTailwindcss />
                </div>
                <h3>{product.name}</h3>
                <h4>${product.price}</h4>
                <p>{product.permonth}</p>
                <ul className={styles.pricingcontainerfeatures}>
                  <li>{product.Transactions} Transactions</li>
                  <li>{product.cashback}% Cash Back</li>
                  <li>${product.Limit} Limit</li>
                </ul>

                <Buybutton2 product={product} />
                
              </div>
             </div>
             </div>
             ))}
        {productslarge.map(product => (
           <div key={product.name}>
            <div className={styles.pricingcontainercard}>
              <div className={styles.pricingcontainercardinfo}>
                <div className={styles.icon}>
                  <GiCrystalize />
                </div>
                <h3>{product.name}</h3>
                <h4>${product.price}</h4>
                <p>{product.permonth}</p>
                <ul className={styles.pricingcontainerfeatures}>
                  <li>{product.Transactions} Transactions</li>
                  <li>{product.cashback}% Cash Back</li>
                  <li>${product.Limit} Limit</li>
                </ul>

                <Buybutton product={product} />

              </div>
             </div>
             </div>
             ))}
            </div>
           </div>
          </div>
      <TransactionSection />
    </div>
  );
}

export async function getStaticProps() {
  const products_res = await fetch(`${API_URL}/products/`)
  const products2 = await products_res.json()
  let products = products2.filter(person => person.Transactions < 101);
  let productsmed = products2.filter(personmed => personmed.Transactions === 1000);
  let productslarge = products2.filter(personlarge => personlarge.Transactions === 2500);

  return {
    props: {
        products,
        productsmed,
        productslarge
    }
  }
}