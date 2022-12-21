import "./assets/css/App.scss";

function App() {
  return (
    <div>
      <header className="header">
        <a className="header_link" href="/">
          <img src="/svg/logo.svg" />
          <h2>Erina</h2>
        </a>
        <nav>
          <span>Home</span>
          <span>About</span>
          <span>Shop</span>
          <span>Page</span>
          <span>Blog</span>
          <span>Contact</span>
        </nav>
        <div className="header_buttons">
          <a href="#">
            <img src="/svg/search_icon.svg" alt="search-icon" />
          </a>
          <a href="#">
            <img src="/svg/person_icon.svg" alt="person-icon" />
          </a>
          <a href="#">
            <img src="/svg/cart_icon.svg" alt="cart-icon" />
          </a>
        </div>
      </header>
      <div className="content">
        <div className="container">Content is here!</div>
      </div>
      <main className="main container">
        <div className="main_fixed">
          <div>
            <img src="/svg/bus_icon.svg" alt="icon" />
            <h6>Free shipping</h6>
            <p>Ut enim ad minim veniam liquip ami tomader</p>
          </div>
          <div>
            <img src="/svg/card_icon.svg" alt="icon" />

            <h6>Secure Payments</h6>
            <p>Eonim ad minim veniam liquip tomader</p>
          </div>
          <div>
            <img src="/svg/return_icon.svg" alt="icon" />

            <h6>Easy Returns</h6>
            <p>Be enim ad minim veniam liquipa ami tomader</p>
          </div>
          <div>
            <img src="/svg/time_icon.svg" alt="icon" />

            <h6>24/7 Support</h6>
            <p>Ut enim ad minim veniam liquip ami tomader</p>
          </div>
        </div>
        <div>
          <h3>Latest arrival</h3>
          <h4>Showing our latest arrival on this summer</h4>
          <div className="items_table">
            <div className="item">
              <div className="item_img">
                <img src="/products/1.jpg" alt="prod" />
              </div>
              <p>Ladies yellow top</p>
              <p>$25</p>
            </div>

            <div className="item">
              <div className="item_img">
                <img src="/products/2.jpg" alt="prod" />
              </div>
              <p>Ladies yellow top</p>
              <p>$25</p>
            </div>

            <div className="item">
              <div className="item_img">
                <img src="/products/3.jpg" alt="prod" />
              </div>
              <p>Ladies yellow top</p>
              <p>$25</p>
            </div>

            <div className="item">
              <div className="item_img">
                <img src="/products/4.jpg" alt="prod" />
              </div>
              <p>Ladies yellow top</p>
              <p>$25</p>
            </div>

            <div className="item">
              <div className="item_img">
                <img src="/products/1.jpg" alt="prod" />
              </div>
              <p>Ladies yellow top</p>
              <p>$25</p>
            </div>
          </div>
        </div>
      </main>

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
              <h6>Usful Links</h6>
              <p>Shop Cupon</p>
              <p>About Us</p>
              <p>Carrer</p>
              <p>Supports</p>
            </div>
            <div>
              <h6>Categories</h6>
              <p>women</p>
              <p>Accessories</p>
              <p>Jewellary</p>
              <p>Beauty Item</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
