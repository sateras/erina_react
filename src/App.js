import "./assets/styles/App.scss";
import Card from "./components/Card";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <div style={{ display: "none" }} className="overlay">
        <div className="drawer">
          <h3>CART</h3>
          <div className="cart">
            <div className="cartItem">
              <div className="cartItemImg">
                <img width={75} src="/products/1.jpg" alt="prod" />
              </div>
              <div>
                <p>Ladies yellow top</p>
                <b>$25</b>
              </div>
              <button className="cart_btn">Delete</button>
            </div>
            <div className="cartItem">
              <div className="cartItemImg">
                <img width={75} src="/products/1.jpg" alt="prod" />
              </div>
              <div>
                <p>Ladies yellow top</p>
                <b>$25</b>
              </div>
              <button className="cart_btn">Delete</button>
            </div>
            <div className="cartItem">
              <div className="cartItemImg">
                <img width={75} src="/products/1.jpg" alt="prod" />
              </div>
              <div>
                <p>Ladies yellow top</p>
                <b>$25</b>
              </div>
              <button className="cart_btn">Delete</button>
            </div>
          </div>
          <div className="cartTotalBlock">
            <div className="cartTotal">
              <span>Total</span>
              <div></div>
              <b>$255</b>
            </div>
            <div>
              <span>Nalog 5%</span>
              <div></div>
              <b>$12.25</b>
            </div>
          </div>
          <button className="greenBtn">Confirm</button>
        </div>
      </div>
      <Header />
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
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
