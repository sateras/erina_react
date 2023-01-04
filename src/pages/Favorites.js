import axios from "axios";
import { useEffect } from "react";
import Card from "../components/Card/Card";

function Favorites({
  favorites,
  setFavorites,
  cartItems,
  addToCart,
  deleteFromFavorites,
}) {
  useEffect(() => {
    axios
      .get("https://635cde0ecb6cf98e56a775e5.mockapi.io/api/v1/favorites")
      .then((res) => {
        setFavorites(res.data);
      });
  }, []);

  return (
    <>
      <div className="main container">
        <h3>Favorites</h3>

        <div className="items_table">
          {favorites.length > 0 ? (
            favorites.map((obj) => (
              <Card
                key={obj.title}
                title={obj.title}
                price={obj.price}
                img={obj.img}
                reviews={obj.reviews}
                isInFavorites={true}
                onAddToCart={() => addToCart(obj)}
                onDeleteFromFavorites={() => deleteFromFavorites(obj.id)}
                isInCart={cartItems.find((item) => item.title === obj.title)}
              />
            ))
          ) : (
            <div className="">
              <p>Favorites is empty</p>Add something to you Favorites
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Favorites;
