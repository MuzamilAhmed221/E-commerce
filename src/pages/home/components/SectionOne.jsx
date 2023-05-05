import styles from "../../../css/home/sectionone.module.css";
import {  womens_cat } from "../../../helper/Helper";
import { useState } from "react";
import CategorySlider from "./CategorySlider";

const SectionOne = () => {
  const [categoryToggle, setCategoryToggle] = useState("Clothings");

  let cat = ["Men's", "Women's", "Kid's"];
  const onSelectCategory = (item) => {
    setCategoryToggle(item);
    console.log(item);
  };

  return (
    <div className={styles.wrapper}>
      <div className={`container_fluid  ${styles.categories_wrap}`}>
        {cat.map((item, index) => {
          return (
            <div
              key={index}
              className={styles.category}
              style={{
                backgroundImage: `url(${require(`../../../assets/banner-${
                  index + 1
                }.jpg.webp`)})`,
              }}
            >
              <h4>{item}</h4>
              <div className={styles.expanding_box}></div>
            </div>
          );
        })}
      </div>
      <CategorySlider
      className={`container_fluid ${styles.cat_products_wrap}`}
        categories={womens_cat}
        posterimage={require("../../../assets/images/women-large.jpg.webp")}
        postername="Women's"
      />
    </div>
  );
};

export default SectionOne;
