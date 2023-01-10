import { useContext } from "react";
import { AppContext } from "../App";

export const useCart = () => {
  const { cartItems, setCartItems } = useContext(AppContext);
  const totalPrice = (arr) => {
    let total = 0;
    arr.forEach((item) => {
      total += item.price;
    });
    return total;
  };

  return { cartItems, setCartItems, totalPrice };
};
