import Link from 'next/link'

import Layout from '../components/layout'
import Navbar from '../components/navbar'
import Footer from '../components/footer'

import StarRatings from 'react-star-ratings'

import styles from '../styles/Packaging.module.css'

export default function Packaging() {
  return (
    <main className={styles.main}>
      <div className={styles.header}>
        <div className={styles.title}>
          <h1>Custom packaging</h1>
          <div className={styles.rating}>
            <StarRatings
              rating={5}
              starDimension="18px"
              starRatedColor="#f7d54e"
              starEmptyColor="#cbcbcb"
              starSpacing="2px"
            />
            <p>9,178 reviews</p>
          </div>
        </div>
      </div>
      <section className={styles.section}>
        <div className={styles.grid}>
          <div className={styles.wrapper}>
            <img className={styles.image} alt="" height="170" loading="lazy" src="/packaging-tape-icon.webp" width="200" />
            <Link href="/"><a>Packaging tape</a></Link>
          </div>
          <div className={styles.wrapper}>
            <img className={styles.image} alt="" height="170" loading="lazy" src="/poly-mailers-icon_1490273366.webp" width="200" />
            <Link href="/"><a>Poly mailers</a></Link>
          </div>
          <div className={styles.wrapper}>
            <img className={styles.image} alt="" height="170" loading="lazy" src="/sm_custom_bubble_mailer_product_icon_1x.webp" width="200" />
            <Link href="/"><a>Bubble mailers</a></Link>
          </div>
          <div className={styles.wrapper}>
            <img className={styles.image} alt="" height="170" loading="lazy" src="/label-dispenser-icon_1617801076.webp" width="200" />
            <Link href="/"><a>Label dispenser</a></Link>
          </div>
        </div>
      </section>
      <section className={styles.videoContainer}>
        <div className={styles.videoWrapper}>
          <div className={styles.video}>
            <div className={styles.wistia_responsive_padding}>
              <div className={styles.wistia_responsive_wrapper}>
                <img src="/986a8c8836ebdcdb519f715ff74f1eb8.webp" alt="" width="100%" height="100%" />
              </div>
            </div>
          </div>
          <div className={styles.content}>
            <h2>Quickly create custom packaging</h2>
            <p>Sticker Mule is leading the revolution from boring, blank packaging to custom packaging that gets your brand free attention while your packages travel in style. Cost-effectively brand your boxes with custom packaging tape, stylishly ship t-shirts in our poly mailers and use our custom bubble mailers to protect your fragile items. Whether you ship 50 or 500,000 packages, Sticker Mule will be your favorite custom packaging supplier.</p>
          </div>
        </div>
      </section>
      <section className={styles.vinyl}>
        <h2>Leading the custom packaging revolution</h2>
        <p>Brands all over the world are migrating from blank to custom packaging. Custom packaging gets you free brand awareness every time you ship a package. Whether you need custom tape, poly mailers or bubble mailers, working with Sticker Mule makes it fast & easy to cost-effectively upgrade to custom packaging that grows your brand.</p>
        <div className={styles.gallery}>
          <div className={styles.galleryMain}>
            <img className={styles.mainImage} loading="lazy" src="/custom-packaging-image-1.webp" />
          </div>
          <img className={styles.image} loading="lazy" src="/custom-packaging-image-2.webp" />
          <img className={styles.image} loading="lazy" src="/custom-packaging-image-3.jpg" />
        </div>
      </section>
      <section className={styles.reviews}>
        <h2>Reviews for custom packaging</h2>
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
              <p>9,178</p>
              <p className={styles.regular}>Total reviews</p>
            </li>
            <li>
              <p>89%</p>
              <p className={styles.regular}>Would order again</p>
            </li>
          </ul>
          <hr className={styles.separator} />
          <ul className={styles.reviewList}>
            <li>
              <div className={styles.review}>
                <div className={styles.avatar}>
                  <img alt="" src="/b100f543-09a1-4665-8729-8ce343f9c72b.webp" width="72px" height="72px" />
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
                    <h4>Rad</h4>
                  </div>
                  <div className={styles.detail}>
                    <span className={styles.reviewerName}>
                      <strong>WITULI</strong>
                    </span>
                    <p className={styles.time}>11 hours ago</p>
                  </div>
                  <p className={styles.feed}>Always a rad product, I never order anywhere else. High quality!</p>
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
                    <h4>Amazing as Always!</h4>
                  </div>
                  <div className={styles.detail}>
                    <span className={styles.reviewerName}>
                      <strong>Danielle Carmack</strong>
                    </span>
                    <p className={styles.time}>13 hours ago</p>
                  </div>
                  <p className={styles.feed}>I wouldn&apos;t trust any other company with my packaging needs! Sticker Mule is the best out there and the constant deals really make me feel appreciated. Plus the customer service is off the charts amazing.</p>
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
                    <h4>perfect for my Peep&apos;s</h4>
                  </div>
                  <div className={styles.detail}>
                    <span className={styles.reviewerName}>
                      <strong>susan</strong>
                    </span>
                    <p className={styles.time}>14 hours ago</p>
                  </div>
                  <p className={styles.feed}>The Sticker mule folks did it again!they created a perfect mailer for us to pack with Easter goodies for all our little kid Peep&apos;s! Thanks for always making a quality product!</p>
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
                    <h4>Packing Tape</h4>
                  </div>
                  <div className={styles.detail}>
                    <span className={styles.reviewerName}>
                      <strong>2 Boys and Their Pops</strong>
                    </span>
                    <p className={styles.time}>15 hours ago</p>
                  </div>
                  <p className={styles.feed}>So order this as definitely something I could use on my packages however once it was sent and I opened it the tape was binded together with more tape which once I removed it the logo was frayed in 2 spots and not something I was happy about</p>
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
                    <h4>Great quality</h4>
                  </div>
                  <div className={styles.detail}>
                    <span className={styles.reviewerName}>
                      <strong>Sondre Nygard</strong>
                    </span>
                    <p className={styles.time}>16 hours ago</p>
                  </div>
                  <p className={styles.feed}>Great quality on both the printing and the tape itself. The price is a little high compared too other dealers tho.</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className={styles.more}>
          <Link href="/"><a className={styles.moreButton}>See all reviews</a></Link>
        </div>
      </section>
      <section className={styles.related}>
        <section className={styles.relatedGrid}>
          <h2>Related to custom packaging</h2>
          <ul>
            <li>
              <Link href="/">
                <a>
                  <img alt="Shipping bags" loading="lazy" src="/custom-shipping-bags-image-3.webp" width="100%" />
                  <p>Shipping bags</p>
                </a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>
                  <img alt="Shipping tape" loading="lazy" src="/shipping-tape-image-2.webp" width="100%" />
                  <p>Shipping tape</p>
                </a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>
                  <img alt="Packaging labels" loading="lazy" src="/packaging-labels-product-thumb.webp" width="100%" />
                  <p>Packaging labels</p>
                </a>
              </Link>
            </li>
          </ul>
        </section>
      </section>
    </main>
  )
}

Packaging.getLayout = function getLayout(page) {
  return (
    <Layout>
      <Navbar />
      {page}
      <Footer />
    </Layout>
  )
}
