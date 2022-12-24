import "../assets/styles/Footer.scss";

function Footer(params) {
  return (
    <footer className="footer">
      <div className="container">
        <div></div>
        <div className="footer_right">
          <div>
            <h6>Address</h6>
            <p>20, Awesome Road, New York, Usa 4D BS3</p>
            <p>+123 456 7890</p>
            <p>hello@ulina.com</p>
          </div>
          <div>
            <h6>Useful Links</h6>
            <p>Shop Coupon</p>
            <p>About Us</p>
            <p>Carrier</p>
            <p>Supports</p>
          </div>
          <div>
            <h6>Categories</h6>
            <p>women</p>
            <p>Accessories</p>
            <p>Jewelry</p>
            <p>Beauty Item</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
