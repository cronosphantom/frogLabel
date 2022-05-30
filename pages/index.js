import Link from 'next/link'

import Layout from '../components/layout'
import Navbar from '../components/navbar'
import Footer from '../components/footer'

import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.container}>
            <div className={styles.wrapper}>
              <div className={styles.slogan}>
                <h1>Custom printing that kicks ass</h1>
              </div>
              <div className={styles.subtitle}>
                <p>Easy online ordering, 4 day turnaround and free online proofs. Free shipping.</p>
              </div>
              <div className={styles.button}>
                <Link href="/stickers"><a className={styles.buttonSecondary}>Shop now</a></Link>
                <Link href="/samples"><a className={styles.buttonPrimary}>Get samples</a></Link>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.products}>
          <div className={styles.productsContainer}>
            <div className={styles.productsWrapper}>
              <div className={styles.grid}>
                <div className={styles.gridWrapper}>
                  <div className={styles.image}>
                    <img alt="Custom stickers" height="170" loading="lazy" src="/custom-stickers.webp" width="200" data-xblocker="passed"></img>
                  </div>
                  <Link href="/stickers"><a>Custom stickers</a></Link>
                </div>
                <div className={styles.gridWrapper}>
                  <div className={styles.image}>
                    <img alt="Custom labels" height="170" loading="lazy" src="/custom-labels.webp" width="200" data-xblocker="passed"></img>
                  </div>
                  <Link href="/labels"><a>Custom labels</a></Link>
                </div>
                <div className={styles.gridWrapper}>
                  <div className={styles.image}>
                    <img alt="Custom buttons" height="170" loading="lazy" src="/custom-oval-buttons.webp" width="200" data-xblocker="passed"></img>
                  </div>
                  <Link href="/buttons"><a>Custom buttons</a></Link>
                </div>
                <div className={styles.gridWrapper}>
                  <div className={styles.image}>
                    <img alt="Custom packaging" height="170" loading="lazy" src="/packaging-tape-icon.webp" width="200" data-xblocker="passed"></img>
                  </div>
                  <Link href="/packaging"><a>Custom packaging</a></Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.videoContainer}>
          <div className={styles.videoWrapper}>
            <div className={styles.video}>
              <div className={styles.wistia_responsive_padding}>
                <div className={styles.wistia_responsive_wrapper}>
                  <img src="/cadfc3a9ace88c28ff20507b7a68bc26.webp" alt="" width="100%" height="100%" />
                </div>
              </div>
            </div>
            <div className={styles.content}>
              <h2>Free shipping, free online proofs, fast turnaround.</h2>
              <p>Sticker Mule is the fastest and easiest way to buy custom printed products. Order in 60 seconds and we&apos;ll turn your designs and illustrations into custom stickers, magnets, buttons, labels and packaging in days. We offer free online proofs, free worldwide shipping and super fast turnaround.</p>
            </div>
          </div>
        </section>
        <section className={styles.logosContainer}>
          <div className={styles.logosWrapper}>
            <img alt="Some of our customers" loading="lazy" src="/customers.webp" className={styles.logoImage} />
            <img alt="Some of our customers" loading="lazy" src="/customers-grid.webp" className={styles.logoImageGrid} />
          </div>
        </section>
      </main>
    </div>
  )
}

Home.getLayout = function getLayout(page) {
  return (
    <Layout>
      <Navbar />
      {page}
      <Footer />
    </Layout>
  )
}
