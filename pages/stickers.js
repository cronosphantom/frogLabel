import Link from 'next/link'

import Layout from '../components/layout'
import Navbar from '../components/navbar'
import Footer from '../components/footer'

import StarRatings from 'react-star-ratings'

import styles from '../styles/Stickers.module.css'

export default function Stickers() {
  return (
    <main className={styles.main}>
      <div className={styles.header}>
        <div className={styles.title}>
          <h1>Custom stickers</h1>
          <div className={styles.rating}>
            <StarRatings
              rating={5}
              starDimension="18px"
              starRatedColor="#f7d54e"
              starEmptyColor="#cbcbcb"
              starSpacing="2px"
            />
            <p>112,349 reviews</p>
          </div>
        </div>
      </div>
      <section className={styles.section}>
        <div className={styles.grid}>
          <div className={styles.wrapper}>
            <img className={styles.image} alt="" height="170" loading="lazy" src="/custom-die-cut-stickers_1477053373.webp" width="200" />
            <Link href="/"><a>Die cut stickers</a></Link>
          </div>
          <div className={styles.wrapper}>
            <img className={styles.image} alt="" height="170" loading="lazy" src="/custom-circle-stickers.webp" width="200" />
            <Link href="/"><a>Circle stickers</a></Link>
          </div>
          <div className={styles.wrapper}>
            <img className={styles.image} alt="" height="170" loading="lazy" src="/custom-rectangle-stickers_1477053420.webp" width="200" />
            <Link href="/"><a>Rectangle stickers</a></Link>
          </div>
          <div className={styles.wrapper}>
            <img className={styles.image} alt="" height="170" loading="lazy" src="/custom-square-stickers.webp" width="200" />
            <Link href="/"><a>Square stickers</a></Link>
          </div>
          <div className={styles.wrapper}>
            <img className={styles.image} alt="" height="170" loading="lazy" src="/custom-oval-stickers.webp" width="200" />
            <Link href="/"><a>Oval stickers</a></Link>
          </div>
          <div className={styles.wrapper}>
            <img className={styles.image} alt="" height="170" loading="lazy" src="/custom-bumper-stickers.webp" width="200" />
            <Link href="/"><a>Bumper stickers</a></Link>
          </div>
          <div className={styles.wrapper}>
            <img className={styles.image} alt="" height="170" loading="lazy" src="/custom-sticker-sheets.webp" width="200" />
            <Link href="/"><a>Sticker sheets</a></Link>
          </div>
          <div className={styles.wrapper}>
            <img className={styles.image} alt="" height="170" loading="lazy" src="/custom-kiss-cut-stickers.webp" width="200" />
            <Link href="/"><a>Kiss cut stickers</a></Link>
          </div>
          <div className={styles.wrapper}>
            <img className={styles.image} alt="" height="170" loading="lazy" src="/custom-rounded-corner-stickers_1477053460.webp" width="200" />
            <Link href="/"><a>Rounded corner stickers</a></Link>
          </div>
          <div className={styles.wrapper}>
            <img className={styles.image} alt="" height="170" loading="lazy" src="/custom-clear-stickers_1477053246.webp" width="200" />
            <Link href="/"><a>Clear stickers</a></Link>
          </div>
          <div className={styles.wrapper}>
            <img className={styles.image} alt="" height="170" loading="lazy" src="/custom-transfer-stickers_1477053447.webp" width="200" />
            <Link href="/"><a>Transfer stickers</a></Link>
          </div>
          <div className={styles.wrapper}>
            <img className={styles.image} alt="" height="170" loading="lazy" src="/custom-vinyl-lettering.webp" width="200" />
            <Link href="/"><a>Vinyl lettering</a></Link>
          </div>
          <div className={styles.wrapper}>
            <img className={styles.image} alt="" height="170" loading="lazy" src="/custom-static-clings.webp" width="200" />
            <Link href="/"><a>Static clings</a></Link>
          </div>
          <div className={styles.wrapper}>
            <img className={styles.image} alt="" height="170" loading="lazy" src="/custom-window-stickers.webp" width="200" />
            <Link href="/"><a>Front adhesive stickers</a></Link>
          </div>
          <div className={styles.wrapper}>
            <img className={styles.image} alt="" height="170" loading="lazy" src="/holographic.webp" width="200" />
            <Link href="/"><a>Holographic stickers</a></Link>
          </div>
        </div>
      </section>
      <section className={styles.videoContainer}>
        <div className={styles.videoWrapper}>
          <div className={styles.video}>
            <div className={styles.wistia_responsive_padding}>
              <div className={styles.wistia_responsive_wrapper}>
                <img src="/f3ecb6ec207219774f09932efce50d46.webp" alt="" width="100%" height="100%" />
                {/* <svg focusable="false" viewBox="0 0 125 80" x="0px" y="0px" className={styles.playButton}><rect fill="none" height="80" width="125" className={styles.svg}></rect><polygon fill="#FFFFFF" points="53,22 53,58 79,40" className={styles.svg}></polygon></svg> */}
              </div>
            </div>
          </div>
          <div className={styles.content}>
            <h2>Free shipping, free online proofs, fast turnaround</h2>
            <p>Stickers are the fastest and easiest way to promote your business, product, or event – and Sticker Mule is the easiest way to buy custom stickers.</p>
            <p>We&apos;ll make beautiful vinyl stickers from any artwork, logo, or photo. Order your stickers in seconds and receive free online proofs, free worldwide shipping and super fast turnaround.</p>
          </div>
        </div>
      </section>
      <section className={styles.vinyl}>
        <h2>Durable, weather resistant vinyl stickers</h2>
        <p>Print custom stickers in any shape or size on premium vinyl.Don&apos;t stress about quality and durability. Our custom stickers feature a special laminate that protects them from exposure to wind, rain and sunlight. You can even put them in your dishwasher and have them come out looking brand new.</p>
        <div className={styles.gallery}>
          <div className={styles.galleryMain}>
            <img className={styles.mainImage} loading="lazy" src="/https___images.ctfassets.net_rw1l6cgr235r_4OxTefAzVKIeaWE4gugOE2_9ba0506655ac079f97e739d66b58116d_custom-stickers-image-1.jpg" />
          </div>
          <img className={styles.image} loading="lazy" src="/custom-stickers-image-2.webp" />
          <img className={styles.image} loading="lazy" src="/die-cut-stickers.webp" />
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
              <p>112,355</p>
              <p className={styles.regular}>Total reviews</p>
            </li>
            <li>
              <p>96%</p>
              <p className={styles.regular}>Would order again</p>
            </li>
          </ul>
          <hr className={styles.separator} />
          <ul className={styles.reviewList}>
            <li>
              <div className={styles.review}>
                <div className={styles.avatar}>
                  <img alt="" src="/AOh14GhnlxJX6o1oYDGMcJEVfgxpz-zbSRb2hHuu64xC=s96-c.webp" width="72px" height="72px" />
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
                    <h4>Love it</h4>
                  </div>
                  <div className={styles.detail}>
                    <span className={styles.reviewerName}>
                      <strong>Amy Suzuki</strong>
                    </span>
                    <p className={styles.time}>3 hours ago</p>
                  </div>
                  <p className={styles.feed}>Good deal. Nice quality :)</p>
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
                    <h4>Love it</h4>
                  </div>
                  <div className={styles.detail}>
                    <span className={styles.reviewerName}>
                      <strong>Katy Mims</strong>
                    </span>
                    <p className={styles.time}>3 hours ago</p>
                  </div>
                  <p className={styles.feed}>Better than expected. Love them</p>
                </div>
              </div>
            </li>
            <li>
              <div className={styles.review}>
                <div className={styles.avatar}>
                  <img alt="" src="/AOh14Ghwo-OSdIKUZUVPQ8y1L7ludnQrcRvJgIbRjmRluA=s96-c.webp" width="72px" height="72px" />
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
                    <h4>great</h4>
                  </div>
                  <div className={styles.detail}>
                    <span className={styles.reviewerName}>
                      <strong>Jason Kim</strong>
                    </span>
                    <p className={styles.time}>5 hours ago</p>
                  </div>
                  <p className={styles.feed}>great</p>
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
                    <h4>Navigate Youth Church Stickers</h4>
                  </div>
                  <div className={styles.detail}>
                    <span className={styles.reviewerName}>
                      <strong>Jeremy Golding</strong>
                    </span>
                    <p className={styles.time}>6 hours ago</p>
                  </div>
                  <p className={styles.feed}>Our sticker turned out great!</p>
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
                    <h4>Exactly what I wanted</h4>
                  </div>
                  <div className={styles.detail}>
                    <span className={styles.reviewerName}>
                      <strong>Rose</strong>
                    </span>
                    <p className={styles.time}>6 hours ago</p>
                  </div>
                  <p className={styles.feed}>I love the whole process of getting my Transfer Sticker created. Being able to see the proofs as often as I needed was so helpful. Shipping was fast and flawless and the quality of the sticker is top notch</p>
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
          <h2>Related to custom stickers</h2>
          <ul>
            <li>
              <Link href="/">
                <a>
                  <img alt="Vinyl stickers" loading="lazy" src="/Thick_vinyl_matte_stickers.jpg" width="100%" />
                  <p>Vinyl stickers</p>
                </a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>
                  <img alt="Car decals" loading="lazy" src="/car-window-decal-taxon.webp" width="100%" />
                  <p>Car decals</p>
                </a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>
                  <img alt="Custom laptop stickers" loading="lazy" src="/large-thumbnail-laptop-stickers.webp" width="100%" />
                  <p>Custom laptop stickers</p>
                </a>
              </Link>
            </li>
          </ul>
        </section>
      </section>
    </main>
  )
}

Stickers.getLayout = function getLayout(page) {
  return (
    <Layout>
      <Navbar />
      {page}
      <Footer />
    </Layout>
  )
}
