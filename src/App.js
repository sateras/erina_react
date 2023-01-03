import "./assets/styles/App.scss";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Drawer from "./components/Drawer/Drawer";
import { useEffect, useState } from "react";
import axios from "axios";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Favorites from "./pages/Favorites";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
  {
    path: "/h",
    element: <div>Hello world!</div>,
  },
]);

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

      {/* <RouterProvider router={router} /> */}
      <Routes>
        <Route
          path="/"
          element={
            <Home addToCart={addToCart} items={items} cartItems={cartItems} />
          }
        ></Route>
        <Route path="/favorites" element={<Favorites />}></Route>
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
