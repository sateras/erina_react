import styles from "./Card.module.scss";

function Card({ title, price, img }) {
  console.log(styles);
  return (
    <div className={styles.card}>
      <div className={styles.card_img}>
        <img src={img} alt="prod" />
      </div>
      <p>{title}</p>
      <p>${price}</p>
    </div>
  );
}

export default Card;
