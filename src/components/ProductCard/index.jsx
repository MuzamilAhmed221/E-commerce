import React from "react";
import { Link } from "react-router-dom";
import styles from "../../css/home/sectionone.module.css";
import { BsBag, BsHeart, BsShuffle } from "react-icons/bs";

const ProductCard = (props) => {
  const { style, categories, posterimage, displayImage,sale,price } = props?.item

  return (
    <div className={styles.cat_products_card}>
      <div
        className={styles.cat_products_card_img}
        style={{
          backgroundImage: `url(${displayImage})`,
        }}
      >
        <div className={styles.card_img_top_wrap}>
          {sale != null && <div className={styles.sale_tag}>SALE</div>}

          <span>
            <BsHeart />
          </span>
        </div>
        <div className={styles.card_img_bottom_wrap}>
          <button className={styles.addcart_btn}>
            <BsBag />
          </button>
          <div>+ Quick view</div>
          <span>
            <BsShuffle />
          </span>
        </div>
      </div>
      <p>Towel</p>
      <Link to="#">
        <h5>Converse Shoes</h5>
      </Link>
      <span>${sale != null ? sale : price} </span>{" "}
      <del>{sale != null && price}</del>
    </div>
  );
};

export default ProductCard;
