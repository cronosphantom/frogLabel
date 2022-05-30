import Link from 'next/link'

import Layout from '../components/layout'
import Navbar from '../components/navbar'
import Footer from '../components/footer'

import StarRatings from 'react-star-ratings'

import styles from '../styles/More.module.css'

export default function More() {
  return (
    <main className={styles.main}>
      <div className={styles.header}>
        <div className={styles.title}>
          <h1>More products</h1>
          <div className={styles.rating}>
            <StarRatings
              rating={5}
              starDimension="18px"
              starRatedColor="#f7d54e"
              starEmptyColor="#cbcbcb"
              starSpacing="2px"
            />
            <p>19,371 reviews</p>
          </div>
        </div>
      </div>
      <section className={styles.section}>
        <div className={styles.grid}>
          <div className={styles.wrapper}>
            <img className={styles.image} alt="" height="170" loading="lazy" src="/custom-t-shirts.webp" width="200" />
            <Link href="/"><a>Custom t-shirts</a></Link>
          </div>
          <div className={styles.wrapper}>
            <img className={styles.image} alt="" height="170" loading="lazy" src="/acrylic-pins.webp" width="200" />
            <Link href="/"><a>Custom pins</a></Link>
          </div>
          <div className={styles.wrapper}>
            <img className={styles.image} alt="" height="170" loading="lazy" src="/acrylic-charms.webp" width="200" />
            <Link href="/"><a>Acrylic charms</a></Link>
          </div>
          <div className={styles.wrapper}>
            <img className={styles.image} alt="" height="170" loading="lazy" src="/stickermule_keychains_product_icon_2x_v2_1602863517.webp" width="200" />
            <Link href="/"><a>Custom keychains</a></Link>
          </div>
          <div className={styles.wrapper}>
            <img className={styles.image} alt="" height="170" loading="lazy" src="/custom-circle-coasters.webp" width="200" />
            <Link href="/"><a>Custom coasters</a></Link>
          </div>
          <div className={styles.wrapper}>
            <img className={styles.image} alt="" height="170" loading="lazy" src="/wall-graphics.webp" width="200" />
            <Link href="/"><a>Wall graphics</a></Link>
          </div>
          <div className={styles.wrapper}>
            <img className={styles.image} alt="" height="170" loading="lazy" src="/floor-graphics.webp" width="200" />
            <Link href="/"><a>Floor graphics</a></Link>
          </div>
          <div className={styles.wrapper}>
            <img className={styles.image} alt="" height="170" loading="lazy" src="/mule-sauce.webp" width="200" />
            <Link href="/"><a>Mule sauce</a></Link>
          </div>
          <div className={styles.wrapper}>
            <img className={styles.image} alt="" height="170" loading="lazy" src="/gift-card_1528992578.webp" width="200" />
            <Link href="/"><a>Gift cards</a></Link>
          </div>
        </div>
      </section>
      <section className={styles.reviews}>
        <h2>Reviews for more products</h2>
        <div className={styles.reviewsContainer}>
          <ul className={styles.reviewSummary}>
            <li>
              <p>4.3 / 5</p>
              <StarRatings
                rating={5}
                starDimension="18px"
                starRatedColor="#f7d54e"
                starEmptyColor="#cbcbcb"
                starSpacing="2px"
              />
            </li>
            <li>
              <p>19,371</p>
              <p className={styles.regular}>Total reviews</p>
            </li>
            <li>
              <p>81%</p>
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
                    <h4>Best sticker company ever</h4>
                  </div>
                  <div className={styles.detail}>
                    <span className={styles.reviewerName}>
                      <strong>Chris Fontana</strong>
                    </span>
                    <p className={styles.time}>1 hours ago</p>
                  </div>
                  <p className={styles.feed}>Best sticker company ever! I’ve been jumping on some of their promotions to make Christmas gifts and products I need. I got my daughter-in-law coasters with her dog on it. So cute. And the sale price was fabulous. This company is doing it right. I wish them all the success in the world. I can’t wait for my magnets, we made them as business cards so we can hand them out to people are asking for phone numbers. It just adds a cool factor! Thanks sticker mule</p>
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
                    <h4>My pins</h4>
                  </div>
                  <div className={styles.detail}>
                    <span className={styles.reviewerName}>
                      <strong>der yang</strong>
                    </span>
                    <p className={styles.time}>1 hours ago</p>
                  </div>
                  <p className={styles.feed}>The quality prints are always on point when I order my custom pins. Love the way these looks.</p>
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
                    <h4>My pins</h4>
                  </div>
                  <div className={styles.detail}>
                    <span className={styles.reviewerName}>
                      <strong>der yang</strong>
                    </span>
                    <p className={styles.time}>1 hours ago</p>
                  </div>
                  <p className={styles.feed}>The quality of the print is good, but most of my pins arrived damaged. 🥲</p>
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
                    <h4>Great quality; color is perfect</h4>
                  </div>
                  <div className={styles.detail}>
                    <span className={styles.reviewerName}>
                      <strong>Marian Ward</strong>
                    </span>
                    <p className={styles.time}>1 hours ago</p>
                  </div>
                  <p className={styles.feed}>These were exactly what I wanted. They are great quality and will be a fun promo for our podcast.</p>
                </div>
              </div>
            </li>
            <li>
              <div className={styles.review}>
                <div className={styles.avatar}>
                  <img alt="" src="/AOh14Gj4Lp2GokXcforrhFHocAEGEfwzBYYCqQ8O9Og1=s96-c.webp" width="72px" height="72px" />
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
                    <h4>Fast shipping, high quality product.</h4>
                  </div>
                  <div className={styles.detail}>
                    <span className={styles.reviewerName}>
                      <strong>David C. Lovelace</strong>
                    </span>
                    <p className={styles.time}>1 hours ago</p>
                  </div>
                  <p className={styles.feed}>I&apos; ve been using Sticker Mule&apos;s reliable service for many years, and I&apos;m consistently impressed with the world-class quality of their materials and brilliant print. I look forward to many more years of enjoying their excellent products and lightning fast service.</p>
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
          <h2>Related to more products</h2>
          <ul>
            <li>
              <Link href="/">
                <a>
                  <img alt="Photo keychains" loading="lazy" src="/photo-keychain-image-1.webp" width="100%" />
                  <p>Photo keychains</p>
                </a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>
                  <img alt="Photo coasters" loading="lazy" src="/https___images.ctfassets.net_rw1l6cgr235r_13v4zwReoWloTY3rqT3ioA_643af8764adbe956fcf2a32a5431435b_photo-coasters-video-thumb.jpg" width="100%" />
                  <p>Photo coasters</p>
                </a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>
                  <img alt="Custom drink coasters" loading="lazy" src="/drink-coasters-image-2.webp" width="100%" />
                  <p>Custom drink coasters</p>
                </a>
              </Link>
            </li>
          </ul>
        </section>
      </section>
    </main>
  )
}

More.getLayout = function getLayout(page) {
  return (
    <Layout>
      <Navbar />
      {page}
      <Footer />
    </Layout>
  )
}
