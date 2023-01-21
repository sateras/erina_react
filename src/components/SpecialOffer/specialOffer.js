import styles from "./specialOffer.module.scss";

function SpecialOffer() {
  return (
    <>
      <div className={styles.offersBox}>
        <div className={styles.leftBox}>
          <img
            className={styles.woman}
            src="erina_react/pretty-woman.svg"
            alt="woman"
          />
          <p className={styles.p1}>Get 40% Off</p>
          <p className={styles.p2}>
            Women’s New
            <br /> Collection
          </p>
          <p className={styles.p3}>SHOP NOW</p>{" "}
        </div>

        <div className={styles.rightBox}>
          <img
            className={styles.man}
            src="erina_react/brutaliti-man.svg"
            alt="man"
          />

          <p className={styles.p1}>Stay Upto Date</p>
          <p className={styles.p2}>
            Men’s Trendy
            <br /> Fashion
          </p>
          <p className={styles.p3}>SHOP NOW</p>
        </div>
      </div>
    </>
  );
}

export default SpecialOffer;
