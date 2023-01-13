import { useContext } from "react";
import ContentLoader from "react-content-loader";
import Card from "../components/Card/Card";
import { AppContext } from "../App";

function Shop() {
  const {
    items,
    cartItems,
    favorites,
    addToCart,
    addToFavorites,
    isLoading,
    deleteFromFavoritesWithTitle,
  } = useContext(AppContext);

  const renderFakeItems = () => {
    return [...Array(8)].map(() => (
      <ContentLoader
        speed={2}
        width={290}
        height={460}
        viewBox="0 0 240 440"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
      >
        <rect x="0" y="0" rx="0" ry="0" width="240" height="320" />
        <rect x="0" y="334" rx="5" ry="5" width="158" height="17" />
        <rect x="0" y="364" rx="7" ry="7" width="206" height="25" />
        <rect x="0" y="398" rx="6" ry="6" width="79" height="25" />
        <rect x="175" y="397" rx="5" ry="5" width="63" height="28" />
      </ContentLoader>
    ));
  };

  const renderItems = () => {
    return items.map((obj) => (
      <Card
        key={obj.title}
        title={obj.title}
        price={obj.price}
        img={obj.img}
        reviews={obj.reviews}
        onAddToCart={() => addToCart(obj)}
        onAddToFavorites={() => addToFavorites(obj)}
        onDeleteFromFavorites={() => deleteFromFavoritesWithTitle(obj.title)}
        isInCart={cartItems.find((item) => item.title === obj.title)}
        isInFavorites={favorites.find((item) => item.title === obj.title)}
        isLoading={false}
      />
    ));
  };

  return (
    <div className="main container">
      <br /> {/*плохое решение  */}
      <h1>This is shop</h1>
      <br /> {/*и это тоже  */}
      <div className="items_table">
        {isLoading ? renderFakeItems() : renderItems()}
      </div>
    </div>
  );
}

export default Shop;
