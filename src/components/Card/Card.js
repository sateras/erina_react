import styles from "./Card.module.scss";

function Card({
  id,
  title,
  price,
  img,
  reviews,
  onAddToCart,
  addToFavorite,
  isInCart,
}) {
  const onClickAddToCart = () => {
    onAddToCart({ title: title, id: id, price: price, img: img });
  };
  return (
    <div className={styles.card}>
      {isInCart ? (
        <div onClick={onClickAddToCart} className={styles.addToCartBefore}>
          ✓
        </div>
      ) : (
        <div onClick={onClickAddToCart} className={styles.addToCart}>
          +
        </div>
      )}
      <div
        onClick={() => console.log(isInCart)}
        className={styles.addToFavorite}
      >
        ❤
      </div>
      <div className={styles.card_img}>
        <img className={styles.img} src={img} alt="prod" />
      </div>
      <div className={styles.first_row}>
        <span className={styles.stars}>★★★★★</span>
        <span className={styles.reviews}>Reviews {reviews}</span>
      </div>
      <p className={styles.title}>{title}</p>
      <p className={styles.price}>${price}</p>
    </div>
  );
}

export default Card;
