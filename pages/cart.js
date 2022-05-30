import Link from 'next/link'

import Layout from '../components/layout'
import Navbar from '../components/navbar'
import Footer from '../components/footer'

import styles from '../styles/Cart.module.css'

export default function Cart() {
  return (
    <main className={styles.main}>
      <section className={styles.section}>
        <div className={styles.header}>
          <h1>Your cart is empty</h1>
          <p className={styles.subtitle}>You may want to add <Link href="/"><a>custom stickers</a></Link> or try a <Link href="/"><a>sample pack</a></Link></p>
        </div>
        <div className={styles.grid}>
          <div className={styles.wrapper}>
            <img className={styles.image} alt="" height="170" loading="lazy" src="/custom-die-cut-stickers-ad78691d0520190122.png" width="200" />
            <Link href="/"><a>Die cut stickers</a></Link>
          </div>
          <div className={styles.wrapper}>
            <img className={styles.image} alt="" height="170" loading="lazy" src="/custom-circle-stickers-6e528edeb120190122.png" width="200" />
            <Link href="/"><a>Circle stickers</a></Link>
          </div>
          <div className={styles.wrapper}>
            <img className={styles.image} alt="" height="170" loading="lazy" src="/custom-transfer-stickers-15b053d69a20190122.png" width="200" />
            <Link href="/"><a>Transfer stickers</a></Link>
          </div>
          <div className={styles.wrapper}>
            <img className={styles.image} alt="" height="170" loading="lazy" src="/custom-wall-graphics-5fb10a8b8d20190122.png" width="200" />
            <Link href="/"><a>Wall graphics</a></Link>
          </div>
        </div>
      </section>
    </main>
  )
}

Cart.getLayout = function getLayout(page) {
  return (
    <Layout>
      <Navbar />
      {page}
      <Footer />
    </Layout>
  )
}
