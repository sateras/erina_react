import axios from "axios";
import { useEffect } from "react";

function Drawer({ cartItems, onClickOverlay, onDeleteFromCart, setCartItems }) {
  const totalPrice = (arr) => {
    let total = 0;
    arr.forEach((item) => {
      total += item.price;
    });
    return total;
  };

  useEffect(() => {
    axios
      .get("https://635cde0ecb6cf98e56a775e5.mockapi.io/api/v1/cart")
      .then((res) => {
        setCartItems(res.data);
      });
  }, []);

  const cartTotalPrice = totalPrice(cartItems);
  return (
    <div onClick={() => onClickOverlay(false)} className="overlay">
      <div className="drawer">
        <h3>CART</h3>
        <div className="cart">
          {cartItems.length > 0 ? (
            cartItems.map((obj) => (
              <div key={obj.id} className="cartItem">
                <div className="cartItemImg">
                  <img width={75} src={obj.img} alt="prod" />
                </div>
                <div>
                  <p>{obj.title}</p>
                  <b>{obj.price}</b>
                </div>
                <button
                  onClick={() => onDeleteFromCart(obj.id)}
                  className="cart_btn"
                >
                  Delete
                </button>
              </div>
            ))
          ) : (
            <div className="cartItemIsEmpty">
              <b>Cart is empty</b>
              <p className="cartItemIsEmptyP">
                Please add something to your cart
              </p>
            </div>
          )}
        </div>
        <div className="cartTotalBlock">
          <div className="cartTotal">
            <span>Total</span>
            <div></div>
            <b>${cartTotalPrice}</b>
          </div>
          <div>
            <span>Tax 5%</span>
            <div></div>
            <b>${Math.round(cartTotalPrice * 0.05 * 100) / 100}</b>
          </div>
        </div>
        {cartItems.length > 0 ? (
          <button className="greenBtn">Confirm</button>
        ) : (
          <button className="greenBtn noneActiveBtn">Confirm</button>
        )}
      </div>
    </div>
  );
}

export default Drawer;
