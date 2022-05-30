import Link from 'next/link'

import Layout from '../components/layout'
import Navbar from '../components/navbar'
import Footer from '../components/footer'

import StarRatings from 'react-star-ratings'

import styles from '../styles/Samples.module.css'

export default function Samples() {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <div className={styles.wrapper}>
          <div className={styles.text}>
            <h1>Sample pack for $1</h1>
            <p className={styles.regular}>
              Each pack contains stickers, labels, and magnets. Free shipping
            </p>
            <Link href="/cart">
              <a>
                <button>
                  <span>Add to cart</span>
                </button>
              </a>
            </Link>
          </div>
          <div className={styles.image}>
            <img src="/hero.jpg" alt="" />
          </div>
        </div>
      </section>
      <section className={styles.samples}>
        <h2>Or, get custom samples using your artwork.</h2>
        <div className={styles.wrapper}>
          <div className={styles.grid}>
            <Link href="/">
              <a>
                <div className={styles.gridItem}>
                  <img src="/sticker-samples.webp" alt="" />
                  <h4>Custom sticker samples</h4>
                  <p>10 for $9</p>
                </div>
              </a>
            </Link>
            <Link href="/">
              <a>
                <div className={styles.gridItem}>
                  <img src="/clear-sticker-samples.webp" alt="" />
                  <h4>Clear sticker samples</h4>
                  <p>10 for $9</p>
                </div>
              </a>
            </Link>
            <Link href="/">
              <a>
                <div className={styles.gridItem}>
                  <img src="/holographic-sticker-samples.webp" alt="" />
                  <h4>Holographic sticker samples</h4>
                  <p>10 for $9</p>
                </div>
              </a>
            </Link>
            <Link href="/">
              <a>
                <div className={styles.gridItem}>
                  <img src="/magnet-samples.webp" alt="" />
                  <h4>Custom magnet samples</h4>
                  <p>10 for $9</p>
                </div>
              </a>
            </Link>
            <Link href="/">
              <a>
                <div className={styles.gridItem}>
                  <img src="/label-samples.webp" alt="" />
                  <h4>Custom label samples</h4>
                  <p>10 for $9</p>
                </div>
              </a>
            </Link>
            <Link href="/">
              <a>
                <div className={styles.gridItem}>
                  <img src="/clear-label-samples.webp" alt="" />
                  <h4>Clear label samples</h4>
                  <p>10 for $9</p>
                </div>
              </a>
            </Link>
            <Link href="/">
              <a>
                <div className={styles.gridItem}>
                  <img src="/coaster-samples.webp" alt="" />
                  <h4>Custom coaster samples</h4>
                  <p>10 for $9</p>
                </div>
              </a>
            </Link>
            <Link href="/">
              <a>
                <div className={styles.gridItem}>
                  <img src="/packaging-tape-sample.webp" alt="" />
                  <h4>Custom tape samples</h4>
                  <p>1 strip for $4</p>
                </div>
              </a>
            </Link>
            <Link href="/">
              <a>
                <div className={styles.gridItem}>
                  <img src="/poly-mailer-samples.webp" alt="" />
                  <h4>Custom poly mailer samples</h4>
                  <p>10 for $9</p>
                </div>
              </a>
            </Link>
          </div>
        </div>
      </section>
      <section className={styles.videoSection}>
        <div className={styles.videoSummary}>
          <div className={styles.video}>
            <img src="/42195e9de48e0221a284250eee734df3.webp" alt="" width="100%" height="100%" />
          </div>
          <div className={styles.content}>
            <h2>Try custom samples before placing a large order</h2>
            <p>Order a small batch of custom printed stickers, labels or packaging to see how your design looks in real life. You’ll get a free online proof, fast 4 day turnaround and free shipping. It’s an inexpensive way to test us out and explore our product line.</p>
          </div>
        </div>
      </section>
      <section className={styles.reviews}>
        <h2>Reviews for custom stickers</h2>
        <div className={styles.reviewsContainer}>
          <ul className={styles.reviewSummary}>
            <li>
              <p>4.8 / 5</p>
              <StarRatings
                rating={5}
                starDimension="18px"
                starRatedColor="#f7d54e"
                starEmptyColor="#cbcbcb"
                starSpacing="2px"
              />
            </li>
            <li>
              <p>22,624</p>
              <p className={styles.regular}>Total reviews</p>
            </li>
            <li>
              <p>95%</p>
              <p className={styles.regular}>Would order again</p>
            </li>
          </ul>
          <hr className={styles.separator} />
          <ul className={styles.reviewList}>
            <li>
              <div className={styles.review}>
                <div className={styles.avatar}>
                  <img alt="" src="/AOh14GiHqp_3flXQflHaBD9eTiSulVzCiKVCE_qITm5k=s96-c.webp" width="72px" height="72px" />
                </div>
                <div>
                  <div className={styles.summary}>
                    <span>
                      <StarRatings
                        rating={5}
                        starDimension="18px"
                        starRatedColor="#f7d54e"
                        starEmptyColor="#cbcbcb"
                        starSpacing="2px"
                      />
                    </span>
                    <h4>Absolutely Chuffed</h4>
                  </div>
                  <div className={styles.detail}>
                    <span className={styles.reviewerName}>
                      <strong>Ariana Caraballo</strong>
                    </span>
                    <p className={styles.time}>6 hours ago</p>
                  </div>
                  <p className={styles.feed}>Honestly one of the best places to order die cut vinyl stickers online.</p>
                </div>
              </div>
            </li>
            <li>
              <div className={styles.review}>
                <div className={styles.avatar}>
                  <img alt="" src="/AOh14GiHqp_3flXQflHaBD9eTiSulVzCiKVCE_qITm5k=s96-c.webp" width="72px" height="72px" />
                </div>
                <div>
                  <div className={styles.summary}>
                    <span>
                      <StarRatings
                        rating={5}
                        starDimension="18px"
                        starRatedColor="#f7d54e"
                        starEmptyColor="#cbcbcb"
                        starSpacing="2px"
                      />
                    </span>
                    <h4>Impressed</h4>
                  </div>
                  <div className={styles.detail}>
                    <span className={styles.reviewerName}>
                      <strong>Ariana Caraballo</strong>
                    </span>
                    <p className={styles.time}>6 hours ago</p>
                  </div>
                  <p className={styles.feed}>Very impressed with the quality of the colors on the artwork!</p>
                </div>
              </div>
            </li>
            <li>
              <div className={styles.review}>
                <div className={styles.avatar}>
                  <img alt="" src="/default-avatar.svg" width="72px" height="72px" />
                </div>
                <div>
                  <div className={styles.summary}>
                    <span>
                      <StarRatings
                        rating={5}
                        starDimension="18px"
                        starRatedColor="#f7d54e"
                        starEmptyColor="#cbcbcb"
                        starSpacing="2px"
                      />
                    </span>
                    <h4>Very nice</h4>
                  </div>
                  <div className={styles.detail}>
                    <span className={styles.reviewerName}>
                      <strong>Samantha Magee</strong>
                    </span>
                    <p className={styles.time}>7 hours ago</p>
                  </div>
                  <p className={styles.feed}>The sticker turned out great! They were able to remove what I asked for. It looks good. Had no problems. They came in sooner than I expected.</p>
                </div>
              </div>
            </li>
            <li>
              <div className={styles.review}>
                <div className={styles.avatar}>
                  <img alt="" src="/default-avatar.svg" width="72px" height="72px" />
                </div>
                <div>
                  <div className={styles.summary}>
                    <span>
                      <StarRatings
                        rating={5}
                        starDimension="18px"
                        starRatedColor="#f7d54e"
                        starEmptyColor="#cbcbcb"
                        starSpacing="2px"
                      />
                    </span>
                    <h4>Love the magnets!</h4>
                  </div>
                  <div className={styles.detail}>
                    <span className={styles.reviewerName}>
                      <strong>Faith Feidner</strong>
                    </span>
                    <p className={styles.time}>10 hours ago</p>
                  </div>
                  <p className={styles.feed}>These could be a little thicker, but overall an awesome product!</p>
                </div>
              </div>
            </li>
            <li>
              <div className={styles.review}>
                <div className={styles.avatar}>
                  <img alt="" src="/default-avatar.svg" width="72px" height="72px" />
                </div>
                <div>
                  <div className={styles.summary}>
                    <span>
                      <StarRatings
                        rating={5}
                        starDimension="18px"
                        starRatedColor="#f7d54e"
                        starEmptyColor="#cbcbcb"
                        starSpacing="2px"
                      />
                    </span>
                    <h4>Awesome product!</h4>
                  </div>
                  <div className={styles.detail}>
                    <span className={styles.reviewerName}>
                      <strong>Faith Feidner</strong>
                    </span>
                    <p className={styles.time}>10 hours ago</p>
                  </div>
                  <p className={styles.feed}>Thank you guys so much for these BEAUTIFUL high quality holo stickers! LOVE THEM!!!</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className={styles.more}>
          <Link href="/">
            <a className={styles.moreButton}>See all reviews</a>
          </Link>
        </div>
      </section>
    </main>
  )
}

Samples.getLayout = function getLayout(page) {
  return (
    <Layout>
      <Navbar />
      {page}
      <Footer />
    </Layout>
  )
}
