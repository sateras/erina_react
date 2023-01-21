import { Link } from "react-router-dom";
import { useCart } from "../../hooks/useCart";
import styles from "./Header.module.scss";

function Header(props) {
  const { cartItems } = useCart();

  return (
    <header className={styles.header}>
      <Link className={styles.header_link} to={`/`}>
        <img src="svg/logo.svg" alt="logo" />
        <h2 className={styles.h2}>Erina</h2>
      </Link>
      <nav className={styles.nav}>
        <Link className={styles.a} to={`/`}>
          Home
        </Link>
        <Link className={styles.a} to={`/about`}>
          About
        </Link>
        <Link className={styles.a} to={`/shop`}>
          Shop
        </Link>
        <Link className={styles.a} to={`/blog`}>
          Blog
        </Link>
        <Link className={styles.a} to={`/contact`}>
          Contact
        </Link>
        <Link className={styles.a} to={`/favorites`}>
          My Favorites
        </Link>
      </nav>
      <div className={styles.header_buttons}>
        <div className={styles.cursor}>
          <img src="svg/search_icon.svg" alt="search-icon" />
        </div>
        <Link to={`/orders`} className={styles.cursor}>
          <img src="svg/person_icon.svg" alt="person-icon" />
        </Link>
        <div className={styles.cursor} onClick={() => props.onClickCart(true)}>
          <img src="svg/cart_icon.svg" alt="cart-icon" />
          {cartItems.length > 0 && (
            <div className={styles.cartIndicator}>{cartItems.length}</div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
