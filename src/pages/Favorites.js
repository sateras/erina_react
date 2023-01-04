import axios from "axios";
import { useEffect } from "react";
import Card from "../components/Card/Card";

function Favorites({ favorites, setFavorites }) {
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
                // onAddToCart={() => addToCart(obj)}
                // isInCart={cartItems.forEach((i) => {
                //   if (i.id === obj.id) return true;
                // })}
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
