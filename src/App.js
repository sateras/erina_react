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
  const [favorites, setFavorites] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // axios
    //   .get("https://635cde0ecb6cf98e56a775e5.mockapi.io/api/v1/wears")
    //   .then((res) => {
    //     setItems(res.data);
    //   });

    // axios
    //   .get("https://635cde0ecb6cf98e56a775e5.mockapi.io/api/v1/cart")
    //   .then((res) => {
    //     setCartItems(res.data);
    //   });
    // axios
    //   .get("https://635cde0ecb6cf98e56a775e5.mockapi.io/api/v1/favorites")
    //   .then((res) => {
    //     setFavorites(res.data);
    //   });

    // --Выводы--
    // если будет сильный разброс во времини в запросах
    // над будет делать через async функцию внутри useEffect
    // но это продлит время запроса

    async function makeRequest() {
      setIsLoading(true);
      const wears = await axios.get(
        "https://635cde0ecb6cf98e56a775e5.mockapi.io/api/v1/wears"
      );
      const cart = await axios.get(
        "https://635cde0ecb6cf98e56a775e5.mockapi.io/api/v1/cart"
      );
      const favorites = await axios.get(
        "https://635cde0ecb6cf98e56a775e5.mockapi.io/api/v1/favorites"
      );

      setItems(wears.data);
      setCartItems(cart.data);
      setFavorites(favorites.data);

      setIsLoading(false);
    }
    makeRequest();
  }, []);

  const deleteFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
    axios.delete(
      `https://635cde0ecb6cf98e56a775e5.mockapi.io/api/v1/cart/${id}`
    );
  };

  const addToCart = async (item) => {
    try {
      if (cartItems.indexOf(item) === -1) {
        console.log(cartItems);
        console.log(items);
        const { data } = await axios.post(
          "https://635cde0ecb6cf98e56a775e5.mockapi.io/api/v1/cart",
          item
        );
        setCartItems((prev) => [...prev, data]);
        return;
      }
    } catch (error) {
      alert("Не удалость добваить в корзину! (Подробнее в консоли)");
      console.log("Error:  ", error);
    }
  };

  const deleteFromFavorites = (id) => {
    setFavorites((prev) => prev.filter((item) => item.id !== id));
    axios.delete(
      `https://635cde0ecb6cf98e56a775e5.mockapi.io/api/v1/favorites/${id}`
    );
  };

  const addToFavorites = (item) => {
    if (favorites.find((favItem) => favItem.title === item.title)) {
      // axios.delete(
      //   `https://635cde0ecb6cf98e56a775e5.mockapi.io/api/v1/favorites/${item.id}`
      // );
    } else {
      axios.post(
        "https://635cde0ecb6cf98e56a775e5.mockapi.io/api/v1/favorites",
        item
      );
      setFavorites((prev) => [...prev, item]);
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
      <div className="appBody">
        <div className="appContent">
          <Header onClickCart={setCartOpened} />

          {/* <RouterProvider router={router} /> */}
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  addToCart={addToCart}
                  addToFavorites={addToFavorites} // добавляет в изранное
                  deleteFromFavorites={deleteFromFavorites} // а он удаляет
                  // две отдельные фунцкий (addTo, deleteFrom) из-зa особенности бекенда
                  // не умеющего нормально создовать список с уникальным id
                  items={items}
                  cartItems={cartItems}
                  favorites={favorites}
                  isLoading={isLoading}
                />
              }
            />
            <Route
              path="/favorites"
              element={
                <Favorites
                  cartItems={cartItems}
                  favorites={favorites}
                  setFavorites={setFavorites}
                  deleteFromFavorites={deleteFromFavorites}
                  addToCart={addToCart}
                />
              }
            />
            <Route
              path="/about"
              element={<h3 className="container">About</h3>}
            />
            <Route path="/shop" element={<h3 className="container">Shop</h3>} />
            <Route path="/blog" element={<h3 className="container">Blog</h3>} />
            <Route
              path="/contact"
              element={<h3 className="container">Contact</h3>}
            />
          </Routes>
        </div>

        <Footer />
      </div>
    </div>
  );
}

export default App;
