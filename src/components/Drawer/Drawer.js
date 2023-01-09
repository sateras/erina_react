import styles from "./Drawer.module.scss";
import axios from "axios";
import { useState } from "react";

function Drawer({ cartItems, onClickOverlay, onDeleteFromCart, setCartItems }) {
  const [isOrderComplete, setIsOrderComplete] = useState(false);
  const [orderNumber, setOrderNumber] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const makeOrder = async (order, total) => {
    try {
      setIsLoading(true);
      const { data } = await axios.post(
        "https://63bbca11cf99234bfa64244b.mockapi.io/orders",
        {
          items: order,
          totalCost: total,
          currency: "USA Dollars",
        }
      );

      for await (let item of cartItems) {
        await axios.delete(
          `https://635cde0ecb6cf98e56a775e5.mockapi.io/api/v1/cart/${item.id}`
        );
      }
      setCartItems([]);
      setIsOrderComplete(true);
      setOrderNumber(data.id);
    } catch (error) {
      alert("Не удалось осуществить заказ! (Подробнее в консоли)");
      console.log("Error:  ", error);
    }
    setIsLoading(false);
  };

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
          {isLoading ? (
            <div>Loading...</div>
          ) : isOrderComplete ? (
            <div>Заказ номер {orderNumber} оформлен!</div>
          ) : cartItems.length > 0 ? (
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
              <img height={200} src="/emptycart.png" alt="emty card icon" />
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
        {isLoading ? (
          <button className={styles.loadingGreenBtn}>Loading...</button>
        ) : cartItems.length > 0 ? (
          <button
            onClick={() => makeOrder(cartItems, cartTotalPrice)}
            className={styles.greenBtn}
          >
            Confirm
          </button>
        ) : (
          <button className={styles.noneActiveBtn}>Confirm</button>
        )}
      </div>
    </div>
  );
}

export default Drawer;
