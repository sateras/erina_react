import "./assets/styles/App.scss";
import Card from "./components/Card/Card";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Drawer from "./components/Drawer/Drawer";
import { useEffect, useState } from "react";
import axios from "axios";

// [
//   {
//    "id": 1,
//    "title": "Ladies yellow top",
//    "price": 25,
//    "img": "/products/1.jpg"
//   },
//   {
//    "id": 2,
//    "title": "Top no yellow",
//    "price": 23,
//    "img": "/products/2.jpg"
//   },
//   {
//    "id": 4,
//    "title": "Top no yellow",
//    "price": 23,
//    "img": "/products/4.jpg"
//   },
//   {
//    "id": 5,
//    "title": "Top no yellow",
//    "price": 23,
//    "img": "/products/5.jpg"
//   },
//   {
//    "id": 6,
//    "title": "Top no yellow",
//    "price": 23,
//    "img": "/products/6.jpg"
//   },
//   {
//    "id": 7,
//    "title": "Top no yellow",
//    "price": 23,
//    "img": "/products/7.jpg"
//   },
//   {
//    "id": 8,
//    "title": "Top no yellow",
//    "price": 23,
//    "img": "/products/8.jpg"
//   },
//   {
//    "id": 3,
//    "title": "Ladies yellow top",
//    "price": 26,
//    "img": "/products/3.jpg"
//   }
//  ]

function App() {
  const [cartOpened, setCartOpened] = useState(false);
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    axios
      .get("https://635cde0ecb6cf98e56a775e5.mockapi.io/api/v1/wears")
      .then((res) => {
        setItems(res.data);
      });

    // axios
    //   .get("https://635cde0ecb6cf98e56a775e5.mockapi.io/api/v1/cart")
    //   .then((res) => {
    //     setCartItems(res.data);
    //   });
  }, []);

  const deleteFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
    axios.delete(
      `https://635cde0ecb6cf98e56a775e5.mockapi.io/api/v1/cart/${id}`
    );
    console.log(id);
  };

  const addToCart = (item) => {
    if (cartItems.indexOf(item) === -1) {
      console.log(cartItems);
      console.log(items);
      axios.post(
        "https://635cde0ecb6cf98e56a775e5.mockapi.io/api/v1/cart",
        item
      );
      setCartItems((prev) => [...prev, item]);
      return;
    }
  };
  return (
    <div>
      {cartOpened ? (
        <Drawer
          onClickOverlay={setCartOpened}
          cartItems={cartItems}
          onDeleteFromCart={deleteFromCart}
          setCartItems={setCartItems}
        />
      ) : null}

      <Header onClickCart={setCartOpened} />

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
            {items.map((obj) => (
              <Card
                key={obj.title}
                title={obj.title}
                price={obj.price}
                img={obj.img}
                reviews={obj.reviews}
                onAddToCart={() => addToCart(obj)}
                isInCart={cartItems.forEach((i) => {
                  if (i.id === obj.id) return true;
                })}
              />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
