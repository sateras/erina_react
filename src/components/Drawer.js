function Drawer(props) {
  return (
    <div onClick={() => props.onClickOverlay(false)} className="overlay">
      <div className="drawer">
        <h3>CART</h3>
        <div className="cart">
          {props.cartItem ? (
            props.cartItems.map((obj) => (
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
            ))
          ) : (
            <div>Cart is PUSTOI</div>
          )}
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
        {props.cartItem ? (
          <button className="greenBtn">Confirm</button>
        ) : (
          <button className="greenBtn noneActiveBtn">Confirm</button>
        )}
      </div>
    </div>
  );
}

export default Drawer;
