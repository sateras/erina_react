import styles from "./Header.module.scss";

function Header(props) {
  return (
    <header className={styles.header}>
      <a className={styles.header_link} href="/">
        <img src="/svg/logo.svg" />
        <h2 className={styles.h2}>Erina</h2>
      </a>
      <nav className={styles.nav}>
        <a className={styles.a} href="#">
          Home
        </a>
        <a className={styles.a} href="#">
          About
        </a>
        <a className={styles.a} href="#">
          Shop
        </a>
        <a className={styles.a} href="#">
          Page
        </a>
        <a className={styles.a} href="#">
          Blog
        </a>
        <a className={styles.a} href="#">
          Contact
        </a>
      </nav>
      <div className={styles.header_buttons}>
        <div className={styles.cursor}>
          <img src="/svg/search_icon.svg" alt="search-icon" />
        </div>
        <div className={styles.cursor}>
          <img src="/svg/person_icon.svg" alt="person-icon" />
        </div>
        <div className={styles.cursor} onClick={() => props.onClickCart(true)}>
          <img src="/svg/cart_icon.svg" alt="cart-icon" />
        </div>
      </div>
    </header>
  );
}

export default Header;
