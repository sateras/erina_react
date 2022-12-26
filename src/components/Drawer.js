function Drawer(props) {
  return (
    <div onClick={() => props.onClickOverlay(false)} className="overlay">
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
  );
}

export default Drawer;
