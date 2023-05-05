import React, { useState } from "react";
import ProductCard from "../../../components/ProductCard";
import styles from "../../../css/shop/sectionone.module.css";
import { ShopProductCards } from "../../../helper/Helper";
import ProductFilter from "./ProductFilter";

const SectionOne = () => {
  return (
    <div className={`container ${styles.wrapper}`}>
      <ProductFilter />
      <div className={styles.productcard_wrap}>
        <div className={styles.product_sorting_wrap}>
          <div className={styles.default_sorting}>
            <select name="" id="">
              <option value="">Default Sorting</option>
            </select>
          </div>
          <div className={styles.default_sorting}>
            <select
              name=""
              id=""
              style={{ width: "160px", marginLeft: "10px" }}
            >
              <option value="">Show: 09</option>
            </select>
          </div>
          <p>Show 01- 09 Of 36 Product</p>
        </div>
        <div className={styles.cards}>
          {ShopProductCards.map((item, index) => (
            <ProductCard item={item} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionOne;
