import styles from "./Drawer.module.scss";
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

  // useEffect(() => {
  //   axios
  //     .get("https://635cde0ecb6cf98e56a775e5.mockapi.io/api/v1/cart")
  //     .then((res) => {
  //       setCartItems(res.data);
  //     });
  // }, []);

  const cartTotalPrice = totalPrice(cartItems);
  return (
    <div className={styles.overlay}>
      <div className={styles.drawer}>
        <div className={styles.cart_title}>
          <h3>CART</h3>
          <div onClick={() => onClickOverlay(false)} className={styles.out_btn}>
            ←
          </div>
        </div>

        <div className={styles.cart}>
          {cartItems.length > 0 ? (
            cartItems.map((obj) => (
              <div key={obj.id} className={styles.cartItem}>
                <div className={styles.cartItemImg}>
                  <img width={75} src={obj.img} alt="prod" />
                </div>
                <div>
                  <p>{obj.title}</p>
                  <b>${obj.price}</b>
                </div>
                <button
                  onClick={() => onDeleteFromCart(obj.id)}
                  className={styles.cart_btn}
                >
                  Delete
                </button>
              </div>
            ))
          ) : (
            <div className={styles.cartItemIsEmpty}>
              <b>Cart is empty</b>
              <p className={styles.cartItemIsEmptyP}>
                Please add something to your cart
              </p>
            </div>
          )}
        </div>
        <div className={styles.cartTotalBlock}>
          <div className={styles.cartTotal}>
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
          <button className={styles.greenBtn}>Confirm</button>
        ) : (
          <button className={styles.noneActiveBtn}>Confirm</button>
        )}
      </div>
    </div>
  );
}

export default Drawer;
