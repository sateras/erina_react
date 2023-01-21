import ContentLoader from "react-content-loader";
import Card from "../components/Card/Card";
import SpecialOffer from "../components/SpecialOffer/specialOffer";

function Home({
  cartItems,
  items,
  addToCart,
  favorites,
  addToFavorites,
  deleteFromFavorites,
  isLoading,
  deleteFromFavoritesWithTitle,
}) {
  const renderFakeItems = () => {
    return [...Array(8)].map((obj) => (
      <ContentLoader
        key={obj}
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
    <>
      <div className="content">
        <div className="container">Content is here!</div>
      </div>

      <main className="main container">
        <div className="main_fixed">
          <div>
            <img src="erina_react/svg/bus_icon.svg" alt="icon" />
            <h6>Free shipping</h6>
            <p>Ut enim ad minim veniam liquip ami tomader</p>
          </div>
          <div>
            <img src="erina_react/svg/card_icon.svg" alt="icon" />
            <h6>Secure Payments</h6>
            <p>Eonim ad minim veniam liquip tomader</p>
          </div>
          <div>
            <img src="erina_react/svg/return_icon.svg" alt="icon" />
            <h6>Easy Returns</h6>
            <p>Be enim ad minim veniam liquipa ami tomader</p>
          </div>
          <div>
            <img src="erina_react/svg/time_icon.svg" alt="icon" />
            <h6>24/7 Support</h6>
            <p>Ut enim ad minim veniam liquip ami tomader</p>
          </div>
        </div>
        <div>
          <h3>Latest arrival</h3>
          <h4>Showing our latest arrival on this summer</h4>

          <div className="items_table">
            {isLoading ? renderFakeItems() : renderItems()}
          </div>
        </div>
      </main>

      <SpecialOffer />
    </>
  );
}

export default Home;
