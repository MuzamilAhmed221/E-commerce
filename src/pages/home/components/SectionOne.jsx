import { style } from "@mui/system";
import { Link } from "react-router-dom";
import Carousel from "../../../components/carousal";
import styles from "../../../css/home/sectionone.module.css";
import { BsBag, BsHeart, BsShuffle } from "react-icons/bs";
import { SwiperSlide } from "swiper/react";
import { categoryname, mens_cat, womens_cat } from "../../../helper/Helper";
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
        categories={womens_cat}
        posterimage={require("../../../assets/images/women-large.jpg.webp")}
        postername="Women's"
      />
    </div>
  );
};

export default SectionOne;
