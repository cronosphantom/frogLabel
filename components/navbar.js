import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router';
import styles from '../styles/Navbar.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

import { useState } from "react";
import { getRedirectStatus } from 'next/dist/lib/load-custom-routes';

function Navbar() {
  const router = useRouter();
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  const redirectTo = (url) => {
    handleClick();
    router.push(url);
  }

  return (
    <>
      <header className={styles.header}>
        <div className={styles.headercontent}>
          <div className={styles.menuicon}>
            <button className={`${active ? styles.hidden : styles.menubutton}`} onClick={handleClick}>
              <svg fill="white" height="25" viewBox="0 0 1000 1000" width="25" xmlns="http://www.w3.org/2000/svg" ><path d="M68 114h864v136H68V114zm0 318h864v136H68V432zm0 318h864v136H68V750z"></path></svg>
            </button>
            <button className={`${active ? styles.menubutton : styles.hidden}`} onClick={handleClick}>
              <svg fill="white" height="25" viewBox="0 0 1000 1000" width="25" xmlns="http://www.w3.org/2000/svg"><path d="M159 204l55-54 659 659-55 55-659-660m709 5L205 877l-55-59 664-664"></path></svg>
            </button>
          </div>
          <div className={styles.menu}>
            <div className={styles.logo}>
              <Link href="/">
                <a title="Return to the homepage">
                  <Image src="/froglabel_logo.png" alt="Logo" width={36} height={36} />
                  frog<span>label</span>
                </a>
              </Link>
            </div>
            <ul className={styles.menuitems}>
              <li>
                <Link href="/stickers">
                  <a>Stickers</a>
                </Link>
              </li>
              <li>
                <Link href="/labels">
                  <a>Labels</a>
                </Link>
              </li>
              <li>
                <Link href="/magnets">
                  <a>Magnets</a>
                </Link>
              </li>
              <li>
                <Link href="/buttons">
                  <a>Buttons</a>
                </Link>
              </li>
              <li>
                <Link href="/packaging">
                  <a>packaging</a>
                </Link>
              </li>
              <li>
                <Link href="/more">
                  <a>More</a>
                </Link>
              </li>
            </ul>
          </div>
          <ul className={styles.authitem}>
            <li>
              <Link href="/cart">
                <a><FontAwesomeIcon icon={faShoppingCart} /></a>
              </Link>
            </li>
            <li className={styles.auth}>
              <Link href="/login">
                <a>Log in</a>
              </Link>
            </li>
            <li className={styles.auth}>
              <Link href="/signup">
                <a>Sign up</a>
              </Link>
            </li>
          </ul>
        </div>
      </header>
      <div className={`${active ? styles.mobilenav : styles.mobilenav + ' ' + styles.hidden}`}>
        <div className={styles.mobilenavcontainer}>
          <ul className={styles.products}>
            <li className={styles.productslist}>
              <button onClick={(e) => redirectTo('/stickers')}>
                <img alt="Stickers" height={68} width={80} src="/custom-stickers.webp" />
                <div>Stickers</div>
              </button>
            </li>
            <li className={styles.productslist}>
              <button onClick={(e) => redirectTo('/labels')}>
                <img alt="Labels" height={68} width={80} src="/custom-labels.webp" />
                <div>Labels</div>
              </button>
            </li>
            <li className={styles.productslist}>
              <button onClick={(e) => redirectTo('/magnets')}>
                <img alt="Magnets" height={68} width={80} src="/custom-magnets.webp" />
                <div>Magnets</div>
              </button>
            </li>
            <li className={styles.productslist}>
              <button onClick={(e) => redirectTo('/buttons')}>
                <img alt="Buttons" height={68} width={80} src="/custom-buttons.webp" />
                <div>Buttons</div>
              </button>
            </li>
            <li className={styles.productslist}>
              <button onClick={(e) => redirectTo('/packaging')}>
                <img alt="Packaging" height={68} width={80} src="/custom-tape.webp" />
                <div>Packaging</div>
              </button>
            </li>
            <li className={styles.productslist}>
              <button onClick={(e) => redirectTo('/more')}>
                <img alt="More" height={68} width={80} src="/custom-circle-coasters.webp" />
                <div>More</div>
              </button>
            </li>
          </ul>
          <hr className={styles.separator} />
          <div className={styles.authentication}>
            <button className={styles.loginbutton} onClick={(e) => redirectTo('/login')}>
              Log in
            </button>
            <p className={styles.regular}>
              or
              <button onClick={(e) => redirectTo('/signup')}>
                create an account
              </button>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar