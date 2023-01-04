import Card from "../components/Card/Card";

function Home({
  cartItems,
  items,
  addToCart,
  favorites,
  addToFavorites,
  deleteFromFavorites,
}) {
  return (
    <>
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
                onAddToFavorites={() => addToFavorites(obj)}
                isInCart={cartItems.find((item) => item.title === obj.title)}
                isInFavorites={favorites.find(
                  (item) => item.title === obj.title
                )}
              />
            ))}
          </div>
        </div>
      </main>
    </>
  );
}

export default Home;
