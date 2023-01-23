import styles from "./Footer.module.scss";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div></div>
        <div className={styles.footer_right}>
          <div>
            <h6>Address</h6>
            <p>20, Awesome Road, New Awesome York, Usa 4D BS3</p>
            <p>+123 456 7890</p>
            <p>hello@erina.com</p>
          </div>
          <div>
            <h6>(not) Useful Links</h6>
            <p>Shop Coupon</p>
            <p>About Us</p>
            <p>Carrier</p>
            <p>Supports</p>
          </div>
          <div>
            <h6>Categories</h6>
            <p>Women</p>
            <p>Accessories</p>
            <p>Jewelry</p>
            <p>Beauty Item</p>
          </div>
          <div className={styles.made_by}>
            Made by <a href="https://github.com/sateras">sateras</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
