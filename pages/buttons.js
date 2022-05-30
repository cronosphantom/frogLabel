import Link from 'next/link'

import Layout from '../components/layout'
import Navbar from '../components/navbar'
import Footer from '../components/footer'

import StarRatings from 'react-star-ratings'

import styles from '../styles/Buttons.module.css'

export default function Buttons() {
  return (
    <main className={styles.main}>
      <div className={styles.header}>
        <div className={styles.title}>
          <h1>Custom buttons</h1>
          <div className={styles.rating}>
            <StarRatings
              rating={5}
              starDimension="18px"
              starRatedColor="#f7d54e"
              starEmptyColor="#cbcbcb"
              starSpacing="2px"
            />
            <p>12,740 reviews</p>
          </div>
        </div>
      </div>
      <section className={styles.section}>
        <div className={styles.grid}>
          <div className={styles.wrapper}>
            <img className={styles.image} alt="" height="170" loading="lazy" src="/custom-1-inch-buttons.webp" width="200" />
            <Link href="/"><a>1&quot; Round buttons</a></Link>
          </div>
          <div className={styles.wrapper}>
            <img className={styles.image} alt="" height="170" loading="lazy" src="/custom-1-25-inch-buttons_1477052586.webp" width="200" />
            <Link href="/"><a>1.25&quot; Round buttons</a></Link>
          </div>
          <div className={styles.wrapper}>
            <img className={styles.image} alt="" height="170" loading="lazy" src="/custom-1-5-inch-buttons.webp" width="200" />
            <Link href="/"><a>1.5&quot; Round buttons</a></Link>
          </div>
          <div className={styles.wrapper}>
            <img className={styles.image} alt="" height="170" loading="lazy" src="/custom-2-25-inch-buttons_1477052690.webp" width="200" />
            <Link href="/"><a>2.25&quot; Round buttons</a></Link>
          </div>
          <div className={styles.wrapper}>
            <img className={styles.image} alt="" height="170" loading="lazy" src="/1-5-inch-square-button-icon.webp" width="200" />
            <Link href="/"><a>Square buttons</a></Link>
          </div>
          <div className={styles.wrapper}>
            <img className={styles.image} alt="" height="170" loading="lazy" src="/custom-rectangle-buttons_1485803931.webp" width="200" />
            <Link href="/"><a>Rectangle buttons</a></Link>
          </div>
          <div className={styles.wrapper}>
            <img className={styles.image} alt="" height="170" loading="lazy" src="/custom-oval-buttons.webp" width="200" />
            <Link href="/"><a>Oval buttons</a></Link>
          </div>
          <div className={styles.wrapper}>
            <img className={styles.image} alt="" height="170" loading="lazy" src="/acrylic-pins.webp" width="200" />
            <Link href="/"><a>Custom pins</a></Link>
          </div>
        </div>
      </section>
      <section className={styles.videoContainer}>
        <div className={styles.videoWrapper}>
          <div className={styles.video}>
            <div className={styles.wistia_responsive_padding}>
              <div className={styles.wistia_responsive_wrapper}>
                <img src="/ec14b1f40e2bdb7c00eacd4b8481cec8.webp" alt="" width="100%" height="100%" />
              </div>
            </div>
          </div>
          <div className={styles.content}>
            <h2>Custom buttons made fast</h2>
            <p>Upload your artwork and we&apos;ll create quality, custom pin-back buttons. Ideal for promoting your business, organization, or event, our custom buttons are easy to wear, hand out or sell. Our proof approval process lets you work directly with us to ensure the artwork and design look perfect.</p>
          </div>
        </div>
      </section>
      <section className={styles.vinyl}>
        <h2>The highest quality custom buttons</h2>
        <p>Something to say? Put it on a colorful custom button. We have the perfect shape and size of pin-back button to promote your business, your candidate or your cause. Order your custom buttons in seconds and get free online proofs, free shipping and super fast turnaround. Then just hand them out and spread your message.</p>
        <div className={styles.gallery}>
          <div className={styles.galleryMain}>
            <img className={styles.mainImage} loading="lazy" src="/custom-buttons-image-1.webp" />
          </div>
          <img className={styles.image} loading="lazy" src="/custom-buttons-image-2.webp" />
          <img className={styles.image} loading="lazy" src="/custom-buttons-image-3.webp" />
        </div>
      </section>
      <section className={styles.reviews}>
        <h2>Reviews for custom buttons</h2>
        <div className={styles.reviewsContainer}>
          <ul className={styles.reviewSummary}>
            <li>
              <p>4.6 / 5</p>
              <StarRatings
                rating={5}
                starDimension="18px"
                starRatedColor="#f7d54e"
                starEmptyColor="#cbcbcb"
                starSpacing="2px"
              />
            </li>
            <li>
              <p>12,740</p>
              <p className={styles.regular}>Total reviews</p>
            </li>
            <li>
              <p>90%</p>
              <p className={styles.regular}>Would order again</p>
            </li>
          </ul>
          <hr className={styles.separator} />
          <ul className={styles.reviewList}>
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
                    <h4>Rock On Racing Pins ROCK!</h4>
                  </div>
                  <div className={styles.detail}>
                    <span className={styles.reviewerName}>
                      <strong>Casey Randall</strong>
                    </span>
                    <p className={styles.time}>8 hours ago</p>
                  </div>
                  <p className={styles.feed}>Love the pins and so did everyone else! Thank you!</p>
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
                    <h4>good</h4>
                  </div>
                  <div className={styles.detail}>
                    <span className={styles.reviewerName}>
                      <strong>complete crazy</strong>
                    </span>
                    <p className={styles.time}>9 hours ago</p>
                  </div>
                  <p className={styles.feed}>good</p>
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
                    <h4>good</h4>
                  </div>
                  <div className={styles.detail}>
                    <span className={styles.reviewerName}>
                      <strong>complete crazy</strong>
                    </span>
                    <p className={styles.time}>9 hours ago</p>
                  </div>
                  <p className={styles.feed}>good</p>
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
                    <h4>good</h4>
                  </div>
                  <div className={styles.detail}>
                    <span className={styles.reviewerName}>
                      <strong>complete crazy</strong>
                    </span>
                    <p className={styles.time}>9 hours ago</p>
                  </div>
                  <p className={styles.feed}>very good</p>
                </div>
              </div>
            </li>
            <li>
              <div className={styles.review}>
                <div className={styles.avatar}>
                  <img alt="" src="/AOh14GiNtdwr3PeIZ63s6y2vHaXAn5PVM4WkXKCepSi0mqE=s96-c.webp" width="72px" height="72px" />
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
                    <h4>Perfect buttons</h4>
                  </div>
                  <div className={styles.detail}>
                    <span className={styles.reviewerName}>
                      <strong>Lynn Fricker</strong>
                    </span>
                    <p className={styles.time}>19 hours ago</p>
                  </div>
                  <p className={styles.feed}>They are absolutely wonderful little buttons! My clients are going to love them! The image is crisp, color good, button pierces and stays. I will order again!</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className={styles.more}>
          <Link href="/" className={styles.moreButton}><a>See all reviews</a></Link>
        </div>
      </section>
      <section className={styles.related}>
        <section className={styles.relatedGrid}>
          <h2>Related to custom buttons</h2>
          <ul>
            <li>
              <Link href="/">
                <a>
                  <img alt="Photo buttons" loading="lazy" src="/Custom_photo_pin-back_button_with_a_dog.webp" width="100%" />
                  <p>Photo buttons</p>
                </a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>
                  <img alt="Campaign buttons" loading="lazy" src="/Political_campaign_button_local_city_council.webp" width="100%" />
                  <p>Campaign buttons</p>
                </a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>
                  <img alt="Face buttons" loading="lazy" src="/face-buttons-thumbnail.webp" width="100%" />
                  <p>Face buttons</p>
                </a>
              </Link>
            </li>
          </ul>
        </section>
      </section>
    </main>
  )
}

Buttons.getLayout = function getLayout(page) {
  return (
    <Layout>
      <Navbar />
      {page}
      <Footer />
    </Layout>
  )
}
