import styles from "./Card.module.scss";

function Card({ title, price, img }) {
  return (
    <div className={styles.card}>
      <div onClick={() => console.log("Tapped")} className={styles.addToCart}>
        +
      </div>
      <div
        onClick={() => console.log("Tapped")}
        className={styles.addToFavorite}
      >
        ❤
      </div>
      <div className={styles.card_img}>
        <img src={img} alt="prod" />
      </div>
      <p>{title}</p>
      <p>${price}</p>
    </div>
  );
}

export default Card;
