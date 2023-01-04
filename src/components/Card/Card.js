import styles from "./Card.module.scss";

function Card({
  title,
  price,
  img,
  reviews,
  onAddToCart,
  onAddToFavorites,
  isInCart,
}) {
  return (
    <div className={styles.card}>
      {isInCart ? (
        <div onClick={onAddToCart} className={styles.addToCartBefore}>
          ✓
        </div>
      ) : (
        <div onClick={onAddToCart} className={styles.addToCart}>
          +
        </div>
      )}
      <div onClick={onAddToFavorites} className={styles.addToFavorite}>
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
