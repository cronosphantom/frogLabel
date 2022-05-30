import Link from 'next/link'
import styles from '../styles/Footer.module.css'

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.links}>
          <nav className={styles.nav}>
            <span>
              <Link href="/">
                <a>About</a>
              </Link>
            </span>
            <span>
              <Link href="/">
                <a>Blog</a>
              </Link>
            </span>
            <span>
              <Link href="/">
                <a>Uses</a>
              </Link>
            </span>
            <span>
              <Link href="/">
                <a>Templates</a>
              </Link>
            </span>
            <span>
              <Link href="/">
                <a>Tools</a>
              </Link>
            </span>
            <span>
              <Link href="/">
                <a>Deals</a>
              </Link>
            </span>
            <span>
              <Link href="/">
                <a>Returns</a>
              </Link>
            </span>
            <span>
              <Link href="/">
                <a>Help</a>
              </Link>
            </span>
          </nav>
        </div>
        <div className={styles.locale}>
          <button className={styles.link}>
            <span className={styles.country}>
              <span className={styles.flag}>
                <img
                  alt="United States"
                  src="http://purecatamphetamine.github.io/country-flag-icons/3x2/US.svg" />
              </span>
              <span>
                English (EN) $USD
              </span>
            </span>
          </button>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.interactive}>
          <a aria-label="Instagram" href="https://www.instagram.com/stickermule" rel="noopener noreferrer" target="_blank"><svg fill="currentColor" height="20" viewBox="0 0 857.1 1000" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M571 500q0-59-41-101t-101-42-101 42-42 101 42 101 101 42 101-42 41-101zm77 0q0 91-64 156t-155 64-156-64-64-156 64-156 156-64 155 64 64 156zm61-229q0 21-15 36t-37 15-36-15-15-36 15-36 36-15 37 15 15 36zM429 148H327q-20 0-54 2t-57 5-40 11q-28 11-49 32t-33 49q-6 16-10 40t-6 58-1 53 0 59 0 43 0 43 0 59 1 53 6 58 10 40q12 28 33 49t49 32q16 6 40 11t57 5 54 2 59 0 43 0 42 0 59 0 54-2 58-5 39-11q28-11 50-32t32-49q6-16 10-40t6-58 1-53 0-59 0-43 0-43 0-59-1-53-6-58-10-40q-11-28-32-49t-50-32q-16-6-39-11t-58-5-54-2-59 0-42 0zm428 352q0 128-3 177-5 116-69 180t-179 69q-50 3-177 3t-177-3q-116-6-180-69T3 677q-3-49-3-177t3-177q5-116 69-180t180-69q49-3 177-3t177 3q116 6 179 69t69 180q3 49 3 177z"></path></svg></a>
          <a aria-label="Facebook" href="https://facebook.com/stickermule" rel="noopener noreferrer" target="_blank"><svg fill="currentColor" height="20" viewBox="0 0 571.4 1000" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M535 7v147h-87q-48 0-65 20t-17 60v106h164l-22 165H366v424H195V505H53V340h142V218q0-104 58-161T408 0q82 0 127 7z"></path></svg></a>
          <a aria-label="Youtube" href="https://www.youtube.com/user/stickermule" rel="noopener noreferrer" target="_blank"><svg fill="currentColor" height="20" viewBox="0 0 1000 1000" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M397 629l270-139-270-141v280zm103-481q94 0 181 3t128 5l41 2 9 1q9 1 13 2t13 2 16 5 16 7 17 11 16 15q4 3 9 10t16 33 15 56q4 36 7 76t3 64v98q1 81-10 162-4 30-14 55t-18 35l-8 9q-7 8-16 15t-17 10-16 7-16 5-13 2-13 2-9 1q-140 11-350 11-115-2-201-4t-111-4l-28-3-20-2q-20-3-30-5t-29-12-31-23q-4-3-9-10t-16-33-15-56q-4-36-7-76t-3-64v-98q-1-81 10-162 4-31 14-55t18-35l8-9q8-9 16-15t17-11 16-7 16-5 13-2 13-2 9-1q140-10 350-10z"></path></svg></a>
        </div>
        <div className={styles.legal}>
          <small>&copy; 2022 Sticker Mule</small>
          <Link href="/"><a>Privacy</a></Link>
          &nbsp;&&nbsp;
          <Link href="/"><a>Terms</a></Link>
          <span className={styles.siteMap}>
            <Link href="/"><a>Site map</a></Link>
          </span>
        </div>
      </div>
    </footer>
  )
}

export default Footer