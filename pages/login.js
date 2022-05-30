import Link from 'next/link'

import Layout from '../components/layout'
import Navbar from '../components/navbar'

import styles from '../styles/Login.module.css'

export default function Login() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <form noValidate>
          <div className={styles.field}>
            <div className={styles.above}>
              <div className={styles.labels}>
                <span>Email</span>
              </div>
            </div>
            <input type="email" className={styles.input} required placeholder="Email"></input>
          </div>
          <div className={styles.field}>
            <div className={styles.above}>
              <div className={styles.labels}>
                <span>Password</span>
              </div>
              <div className={styles.extra}>
                <Link href="/"><a>Forgot password?</a></Link>
              </div>
            </div>
            <input type="password" className={styles.input} required placeholder="Password"></input>
          </div>
          <div className={styles.submit}>
            <button type="submit" className={styles.submitButton}>
              Log in
            </button>
            <div className={styles.bottom}>
              <p className={styles.signupText}>
                or <Link href="/signup"><a>create an account</a></Link>
              </p>
            </div>
          </div>
        </form>
      </div>
      <div className={styles.footer}>
        <small>&copy; 2022 Sticker Mule</small>
        <Link href="/"><a>Privacy</a></Link>
        &nbsp;&&nbsp;
        <Link href="/"><a>Terms</a></Link>
        <span><Link href="/"><a>Site map</a></Link></span>
      </div>
    </main>
  )
}

Login.getLayout = function getLayout(page) {
  return (
    <Layout>
      <Navbar />
      {page}
    </Layout>
  )
}
