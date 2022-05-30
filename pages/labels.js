import Link from 'next/link'

import Layout from '../components/layout'
import Navbar from '../components/navbar'
import Footer from '../components/footer'

import StarRatings from 'react-star-ratings'

import styles from '../styles/Labels.module.css'

export default function Labels() {
  return (
    <main className={styles.main}>
      <div className={styles.header}>
        <div className={styles.title}>
          <h1>Custom labels</h1>
          <div className={styles.rating}>
            <StarRatings
              rating={5}
              starDimension="18px"
              starRatedColor="#f7d54e"
              starEmptyColor="#cbcbcb"
              starSpacing="2px"
            />
            <p>11,589 reviews</p>
          </div>
        </div>
      </div>
      <section className={styles.section}>
        <div className={styles.grid}>
          <div className={styles.wrapper}>
            <img className={styles.image} alt="" height="170" loading="lazy" src="/die_cut_labels_1615222181.webp" width="200" />
            <Link href="/"><a>Die cut roll labels</a></Link>
          </div>
          <div className={styles.wrapper}>
            <img className={styles.image} alt="" height="170" loading="lazy" src="/clear_labels_1615222113.webp" width="200" />
            <Link href="/"><a>Clear roll labels</a></Link>
          </div>
          <div className={styles.wrapper}>
            <img className={styles.image} alt="" height="170" loading="lazy" src="/circle_labels_1615222038.webp" width="200" />
            <Link href="/"><a>Circle roll labels</a></Link>
          </div>
          <div className={styles.wrapper}>
            <img className={styles.image} alt="" height="170" loading="lazy" src="/rectangle_labels_1615222478.webp" width="200" />
            <Link href="/"><a>Rectangle roll labels</a></Link>
          </div>
          <div className={styles.wrapper}>
            <img className={styles.image} alt="" height="170" loading="lazy" src="/square_labels_1615222566.webp" width="200" />
            <Link href="/"><a>Square roll labels</a></Link>
          </div>
          <div className={styles.wrapper}>
            <img className={styles.image} alt="" height="170" loading="lazy" src="/oval_labels_1615222693.webp" width="200" />
            <Link href="/"><a>Oval roll labels</a></Link>
          </div>
          <div className={styles.wrapper}>
            <img className={styles.image} alt="" height="170" loading="lazy" src="/rounded_corner_labels_1615222755.webp" width="200" />
            <Link href="/"><a>Rounded corner roll labels</a></Link>
          </div>
          <div className={styles.wrapper}>
            <img className={styles.image} alt="" height="170" loading="lazy" src="/custom-circle-sheet-labels_1536942736.webp" width="200" />
            <Link href="/"><a>Circle sheet labels</a></Link>
          </div>
          <div className={styles.wrapper}>
            <img className={styles.image} alt="" height="170" loading="lazy" src="/rectangle-sheet-labels.png" width="200" />
            <Link href="/"><a>Rectangle sheet labels</a></Link>
          </div>
          <div className={styles.wrapper}>
            <img className={styles.image} alt="" height="170" loading="lazy" src="/custom-square-sheet-labels.webp" width="200" />
            <Link href="/"><a>Square sheet labels</a></Link>
          </div>
          <div className={styles.wrapper}>
            <img className={styles.image} alt="" height="170" loading="lazy" src="/custom-oval-sheet-labels.webp" width="200" />
            <Link href="/"><a>Oval sheet labels</a></Link>
          </div>
          <div className={styles.wrapper}>
            <img className={styles.image} alt="" height="170" loading="lazy" src="/custom-rounded-corner-sheet-labels.webp" width="200" />
            <Link href="/"><a>Rounded corner sheet labels</a></Link>
          </div>
          <div className={styles.wrapper}>
            <img className={styles.image} alt="" height="170" loading="lazy" src="/custom-die-cut-sheet-labels.webp" width="200" />
            <Link href="/"><a>Die cut sheet labels</a></Link>
          </div>
          <div className={styles.wrapper}>
            <img className={styles.image} alt="" height="170" loading="lazy" src="/label-dispenser-icon_1617801076.webp" width="200" />
            <Link href="/"><a>Label Dispenser</a></Link>
          </div>
        </div>
      </section>
      <section className={styles.videoContainer}>
        <div className={styles.videoWrapper}>
          <div className={styles.video}>
            <div className={styles.wistia_responsive_padding}>
              <div className={styles.wistia_responsive_wrapper}>
                <img src="/024f1604d0b42efc34ebfbaa70b5460a.webp" alt="" width="100%" height="100%" />
                <svg focusable="false" viewBox="0 0 125 80" x="0px" y="0px" className={styles.playButton}><rect fill="none" height="80" width="125" className={styles.svg}></rect><polygon fill="#FFFFFF" points="53,22 53,58 79,40" className={styles.svg}></polygon></svg>
              </div>
            </div>
          </div>
          <div className={styles.content}>
            <h2>Label anything.</h2>
            <p>Personalized sticker labels make it fast & easy to label your products or packaging. Custom roll labels are designed for speed and compatible with most label applicators and dispensers. Custom sheet labels are designed for peeling by hand and compact storage. All our labels are from a premium material with a protective laminate, they are durable, waterproof and dishwasher safe. Each feature a soft, non-glare finish that is ideal for business or fun.</p>
          </div>
        </div>
      </section>
      <section className={styles.vinyl}>
        <h2>Personalized labels with free shipping and online proofs</h2>
        <p>At home or as part of your business promotion, custom made labels make the look of your products match up to their quality. Our unique printing technology allows us to easily print even the most complex label designs. Order your customized sticker labels in seconds and get free online proofs, free shipping and super fast turnaround.</p>
        <div className={styles.gallery}>
          <div className={styles.galleryMain}>
            <img className={styles.mainImage} loading="lazy" src="/custom-labels-image-1.webp" />
          </div>
          <img className={styles.image} loading="lazy" src="/custom-labels-image-2.webp" />
          <img className={styles.image} loading="lazy" src="/custom-labels-image-3.webp" />
        </div>
      </section>
      <section className={styles.reviews}>
        <h2>Reviews for custom labels</h2>
        <div className={styles.reviewsContainer}>
          <ul className={styles.reviewSummary}>
            <li>
              <p>4.7 / 5</p>
              <StarRatings
                rating={5}
                starDimension="18px"
                starRatedColor="#f7d54e"
                starEmptyColor="#cbcbcb"
                starSpacing="2px"
              />
            </li>
            <li>
              <p>11,590</p>
              <p className={styles.regular}>Total reviews</p>
            </li>
            <li>
              <p>93%</p>
              <p className={styles.regular}>Would order again</p>
            </li>
          </ul>
          <hr className={styles.separator} />
          <ul className={styles.reviewList}>
            <li>
              <div className={styles.review}>
                <div className={styles.avatar}>
                  <img alt="" src="/AAuE7mDJFp5E9vMe_J-qU0XFrGKigOoObm7zlg3hbeC8.webp" width="72px" height="72px" />
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
                    <h4>Awesome woro</h4>
                  </div>
                  <div className={styles.detail}>
                    <span className={styles.reviewerName}>
                      <strong>Chris Willis</strong>
                    </span>
                    <p className={styles.time}>2 hours ago</p>
                  </div>
                  <p className={styles.feed}>So fast and excellent quality</p>
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
                    <h4>Perfect</h4>
                  </div>
                  <div className={styles.detail}>
                    <span className={styles.reviewerName}>
                      <strong>Shannon Davis</strong>
                    </span>
                    <p className={styles.time}>12 hours ago</p>
                  </div>
                  <p className={styles.feed}>Sticker turned out great, very fast turn around time, so good I made some more 🤘🏾🤘🏾</p>
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
                    <h4>Quality Work, Too Small</h4>
                  </div>
                  <div className={styles.detail}>
                    <span className={styles.reviewerName}>
                      <strong>Sandy Irving</strong>
                    </span>
                    <p className={styles.time}>17 hours ago</p>
                  </div>
                  <p className={styles.feed}>The work was high quality, however, even though the size was given to me, I found the stickers too small to use. Obviously it was my error. I think a true to size should be included in the proof so we can determine visually what the finished product will look like. I will order again in a size larger.</p>
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
                      <strong>Gianni</strong>
                    </span>
                    <p className={styles.time}>18 hours ago</p>
                  </div>
                  <p className={styles.feed}>They stickers are great in quality , water resistant, and very durable. Recommend getting stickers from stickermule.</p>
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
                    <h4>OCS Service Label</h4>
                  </div>
                  <div className={styles.detail}>
                    <span className={styles.reviewerName}>
                      <strong>Jim McKee</strong>
                    </span>
                    <p className={styles.time}>18 hours ago</p>
                  </div>
                  <p className={styles.feed}>Again, we are receiving our labels in a quick and timely manner!</p>
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
          <h2>Related to custom labels</h2>
          <ul>
            <li>
              <Link href="/">
              <a>
                <img alt="Address labels" loading="lazy" src="/address-labels-image-3.webp" width="100%" />
                <p>Address labels</p>
                </a>
              </Link>
            </li>
            <li>
              <Link href="/">
              <a>
                <img alt="Return address labels" loading="lazy" src="/return-address-labels-image-1.webp" width="100%" />
                <p>Return address labels</p>
                </a>
              </Link>
            </li>
            <li>
              <Link href="/">
              <a>
                <img alt="Product labels" loading="lazy" src="/https___images.ctfassets.net_rw1l6cgr235r_zpl62ihaYSwkw0oAQy6Qc_c8d2d829f3821fe2bfa079c400bbde94_product-labels-thumbnail.jpg" width="100%" />
                <p>Product labels</p>
                </a>
              </Link>
            </li>
          </ul>
        </section>
      </section>
    </main>
  )
}

Labels.getLayout = function getLayout(page) {
  return (
    <Layout>
      <Navbar />
      {page}
      <Footer />
    </Layout>
  )
}
