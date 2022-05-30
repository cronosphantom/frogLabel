import Link from 'next/link'

import Layout from '../components/layout'
import Navbar from '../components/navbar'
import Footer from '../components/footer'

import StarRatings from 'react-star-ratings'

import styles from '../styles/Magnets.module.css'

export default function Magnets() {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <div className={styles.heroWrapper}>
          <div className={styles.productInfo}>
            <div className={styles.picture}>
              <img className={styles.background} alt="Custom magnets" src="/https___d21ii91i3y6o6h.cloudfront.net_products_1106_original_custom-magnets_1556893972.jpg" />
              <img className={styles.background} alt="Custom magnets" src="/custom-magnets-x2.webp" />
            </div>
            <div className={styles.infoContent}>
              <div className={styles.title}>
                <h1>Custom magnets</h1>
                <div className={styles.ratings}>
                  <span>
                    <StarRatings
                      rating={5}
                      starDimension="18px"
                      starRatedColor="#f7d54e"
                      starEmptyColor="#cbcbcb"
                      starSpacing="2px"
                    />
                  </span>
                  <p>
                    <Link href="/"><a className={styles.link}>6,330 reviews</a></Link>
                  </p>
                </div>
              </div>
              <div className={styles.description}>
                <p>Create custom magnets in any shape to promote your business, school or event.  Perfect for use as car magnets, fridge magnets and more. </p>
              </div>
              <button className={styles.infoButton}>Order samples</button>
            </div>
          </div>
          <div className={styles.option}>
            <div className={styles.optionWrapper}>
              <form className={styles.form} noValidate>
                <div className={styles.size}>
                  <h2>Select a size</h2>
                  <ul className={styles.sizeList}>
                    <div className={styles.label}>
                      <input type="radio" name="dimensions" defaultChecked />
                      <span>2&quot; x 2&quot;</span>
                    </div>
                    <div className={styles.label}>
                      <input type="radio" name="dimensions" />
                      <span>3&quot; x 3&quot;</span>
                    </div>
                    <div className={styles.label}>
                      <input type="radio" name="dimensions" />
                      <span>4&quot; x 4&quot;</span>
                    </div>
                    <div className={styles.label}>
                      <input type="radio" name="dimensions" />
                      <span>5&quot; x 5&quot;</span>
                    </div>
                  </ul>
                </div>
                <div className={styles.quantity}>
                  <h2>Select a quantity</h2>
                  <table className={styles.table}>
                    <tbody>
                      <tr>
                        <td className={styles.optionTd}>
                          <div className={styles.quantityOption}>
                            <input type="radio" name="checked" defaultChecked />
                          </div>
                        </td>
                        <td className={styles.quantityTd}>50</td>
                        <td className={styles.priceTd}>
                          <span>$65</span>
                        </td>
                        <td className={styles.savings}></td>
                      </tr>
                      <tr>
                        <td className={styles.optionTd}>
                          <div className={styles.quantityOption}>
                            <input type="radio" name="checked" />
                          </div>
                        </td>
                        <td className={styles.quantityTd}>100</td>
                        <td className={styles.priceTd}>
                          <span>$81</span>
                        </td>
                        <td className={styles.savings}>Save 38%</td>
                      </tr>
                      <tr>
                        <td className={styles.optionTd}>
                          <div className={styles.quantityOption}>
                            <input type="radio" name="checked" />
                          </div>
                        </td>
                        <td className={styles.quantityTd}>200</td>
                        <td className={styles.priceTd}>
                          <span>$110</span>
                        </td>
                        <td className={styles.savings}>Save 58%</td>
                      </tr>
                      <tr>
                        <td className={styles.optionTd}>
                          <div className={styles.quantityOption}>
                            <input type="radio" name="checked" />
                          </div>
                        </td>
                        <td className={styles.quantityTd}>300</td>
                        <td className={styles.priceTd}>
                          <span>$136</span>
                        </td>
                        <td className={styles.savings}>Save 65%</td>
                      </tr>
                      <tr>
                        <td className={styles.optionTd}>
                          <div className={styles.quantityOption}>
                            <input type="radio" name="checked" />
                          </div>
                        </td>
                        <td className={styles.quantityTd}>500</td>
                        <td className={styles.priceTd}>
                          <span>$184</span>
                        </td>
                        <td className={styles.savings}>Save 72%</td>
                      </tr>
                      <tr>
                        <td className={styles.optionTd}>
                          <div className={styles.quantityOption}>
                            <input type="radio" name="checked" />
                          </div>
                        </td>
                        <td className={styles.quantityTd}>1,000</td>
                        <td className={styles.priceTd}>
                          <span>$289</span>
                        </td>
                        <td className={styles.savings}>Save 78%</td>
                      </tr>
                      <tr>
                        <td className={styles.optionTd}>
                          <div className={styles.quantityOption}>
                            <input type="radio" name="checked" />
                          </div>
                        </td>
                        <td className={styles.quantityTd}>2,000</td>
                        <td className={styles.priceTd}>
                          <span>$475</span>
                        </td>
                        <td className={styles.savings}>Save 82%</td>
                      </tr>
                      <tr>
                        <td className={styles.optionTd}>
                          <div className={styles.quantityOption}>
                            <input type="radio" name="checked" />
                          </div>
                        </td>
                        <td className={styles.quantityTd}>3,000</td>
                        <td className={styles.priceTd}>
                          <span>$644</span>
                        </td>
                        <td className={styles.savings}>Save 84%</td>
                      </tr>
                      <tr>
                        <td className={styles.optionTd}>
                          <div className={styles.quantityOption}>
                            <input type="radio" name="checked" />
                          </div>
                        </td>
                        <td className={styles.quantityTd}>5,000</td>
                        <td className={styles.priceTd}>
                          <span>$951</span>
                        </td>
                        <td className={styles.savings}>Save 85%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <button type="submit" className={styles.optionButton}>
                  <span className={styles.buttonContent}>
                    <span>Continue</span>
                  </span>
                </button>
                <p className={styles.optionRegular}>Next: upload artwork →</p>
              </form>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.videoContainer}>
        <div className={styles.benefits}>
          <div className={styles.benefit}>
            <div className={styles.bImage}>
              <img alt="Free shipping in 4 days" src="/4-day.8002e4c10bad2fe0736436889cb2429e.svg" />
            </div>
            <div className={styles.bText}>
              <h3>Free shipping in 4 days</h3>
              <p>Get your custom magnets fast with 4 day turnaround and free shipping.</p>
              {/* <span>
                <button type="button" className={styles.benefitButton}>Get a delivery estimate</button>
              </span> */}
            </div>
          </div>
          <div className={styles.benefit}>
            <div className={styles.bImage}>
              <img alt="Get an online proof" src="/online-proofs.8dea6799552239d432eb9a3bfaa74a69.svg" />
            </div>
            <div className={styles.bText}>
              <h3>Get an online proof</h3>
              <p>Review your proof shortly after checkout and request changes until you&apos;re happy.</p>
            </div>
          </div>
          <div className={styles.benefit}>
            <div className={styles.bImage}>
              <img alt="Get an online proof" src="/multiple-item-discount.e5bafce7ccea4db4a8e3e42a92cbce0a.svg" />
            </div>
            <div className={styles.bText}>
              <h3>Multiple design discounts</h3>
              <p>Order multiple items to receive a discount. Larger orders = larger discounts.</p>
            </div>
          </div>
        </div>
        <div className={styles.videoWrapper}>
          <div className={styles.video}>
            <div className={styles.wistia_responsive_padding}>
              <div className={styles.wistia_responsive_wrapper}>
                <img src="/a716bb1008b82de4c20a9da04380c0a0.webp" alt="" width="100%" height="100%" />
              </div>
            </div>
          </div>
          <div className={styles.content}>
            <h2>Powerful attraction for your designs.</h2>
            <p>Upload your logo, artwork or photo and we&apos;ll create a custom magnet that attracts the eye. Our unique process provides the best print quality and cut accuracy for your custom magnets. And, our proof approval process lets you work directly with us to ensure your magnets will look exactly how you want.</p>
          </div>
        </div>
      </section>
      <section className={styles.vinyl}>
        <h2>Magnetic appeal for your brand</h2>
        <p>From fridge to car, custom magnets make a lasting impression on anyone who sees them. Use custom magnets as a giveaway at an exhibition, a decoration on your refrigerator, or an advertisement on your car. Whether you use them for promotion or fun, custom magnets from Sticker Mule always turn out exactly the way you design them - and are always delivered with fast, free shipping.</p>
        <div className={styles.gallery}>
          <div className={styles.galleryMain}>
            <img className={styles.mainImage} loading="lazy" src="/custom-magnets-image-1.webp" />
          </div>
          <img className={styles.image} loading="lazy" src="/custom-magnets-image-2.webp" />
          <img className={styles.image} loading="lazy" src="/https___images.ctfassets.net_rw1l6cgr235r_5rIUJhmBKuQK8taSUqvw7Y_d40d85fb9cda94e9045ca691322b2f86_custom-magnets-image-3.jpg" />
        </div>
      </section>
      <section className={styles.reviews}>
        <h2>Reviews for custom magnets</h2>
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
              <p>6,328</p>
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
                    <h4>Fast turnaround</h4>
                  </div>
                  <div className={styles.detail}>
                    <span className={styles.reviewerName}>
                      <strong>joelle Brownlee</strong>
                    </span>
                    <p className={styles.time}>3 hours ago</p>
                  </div>
                  <p className={styles.feed}>Fast turn around time. Received my magnets 4 days after i placed my order and they look great.</p>
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
                    <h4>EXCELLANT SERVICE AND QUICK DELIVERY</h4>
                  </div>
                  <div className={styles.detail}>
                    <span className={styles.reviewerName}>
                      <strong>Dahlia Gomez</strong>
                    </span>
                    <p className={styles.time}>19 hours ago</p>
                  </div>
                  <p className={styles.feed}>I would like to say thank you! I am very satisfied with the outcome! I really recommended working with this company!</p>
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
                    <h4>Amazing</h4>
                  </div>
                  <div className={styles.detail}>
                    <span className={styles.reviewerName}>
                      <strong>Joann</strong>
                    </span>
                    <p className={styles.time}>19 hours ago</p>
                  </div>
                  <p className={styles.feed}>Great quality great sells ❤️🌺</p>
                </div>
              </div>
            </li>
            <li>
              <div className={styles.review}>
                <div className={styles.avatar}>
                  <img alt="" src="/AATXAJzboGnL7gse-y3W60jeMKru5iTuGSAFyvvtj58A=s96-c.webp" width="72px" height="72px" />
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
                    <h4>Excellent Work</h4>
                  </div>
                  <div className={styles.detail}>
                    <span className={styles.reviewerName}>
                      <strong>Lucky Armstrong</strong>
                    </span>
                    <p className={styles.time}>23 hours ago</p>
                  </div>
                  <p className={styles.feed}>Great accessories to my clothing sales. This is my second order</p>
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
                    <h4>I&apos;m Sticking with the Mule!!</h4>
                  </div>
                  <div className={styles.detail}>
                    <span className={styles.reviewerName}>
                      <strong>Heartstrong Sleep</strong>
                    </span>
                    <p className={styles.time}>24 hours ago</p>
                  </div>
                  <p className={styles.feed}>I love Sticker Mule... the ordering process is simple and I take advantage of the weekly email specials to re-order!</p>
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
          <h2>Related to custom magnets</h2>
          <ul>
            <li>
              <Link href="/">
                <a>
                  <img alt="Business card magnets" loading="lazy" src="/https___images.ctfassets.net_rw1l6cgr235r_5umQizdcA0CAS44M2AG0ea_3adb20a2e87fe8bc67e85baa4723698c_business-card-magnet-taxon.jpg" width="100%" />
                  <p>Business card magnets</p>
                </a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>
                  <img alt="Car magnets" loading="lazy" src="/https___images.ctfassets.net_rw1l6cgr235r_50QiHBoShWYOMIIKYSAKCm_056bdb2e65d609c22834bc47b0f12fa3_car-magnets-thumb.jpg" width="100%" />
                  <p>Car magnets</p>
                </a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>
                  <img alt="Photo magnets" loading="lazy" src="/photo-magnet-hero.webp" width="100%" />
                  <p>Photo magnets</p>
                </a>
              </Link>
            </li>
          </ul>
        </section>
      </section>
    </main>
  )
}

Magnets.getLayout = function getLayout(page) {
  return (
    <Layout>
      <Navbar />
      {page}
      <Footer />
    </Layout>
  )
}
