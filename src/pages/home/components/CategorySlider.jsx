import { Link } from "react-router-dom";
import Carousel from "../../../components/carousal";
import styles from "../../../css/home/sectionone.module.css";
import { BsBag, BsHeart, BsShuffle } from "react-icons/bs";
import { SwiperSlide } from "swiper/react";
import { categoryname, womens_cat } from "../../../helper/Helper";
import { useState } from "react";

const CategorySlider = (props) => {
  const { style, categories, posterimage, postername } = props;
  const [categoryToggle, setCategoryToggle] = useState("Clothings");

  let cat = ["Men's", "Women's", "Kid's"];
  const onSelectCategory = (item) => {
    setCategoryToggle(item);
    console.log(item);
  };
  return (
    <div
      className={`container_fluid ${styles.cat_products_wrap} `}
      style={style}
    >
      <div
        className={styles.cat_poster}
        style={{
          backgroundImage: `url(${posterimage})`,
        }}
      >
        <h2>{postername}</h2>
        <Link to="# ">Discover more</Link>
      </div>
      <div className={styles.cat_products_carousel}>
        <ul>
          {cat.map((item, index) => {
            return (
              <li
                className={`${categoryToggle === item && styles.category_list}`}
                onClick={() => onSelectCategory(item)}
                key={index}
              >
                {item}
              </li>
            );
          })}
        </ul>

        <div className={styles.crousel_wrapper}>
          <Carousel>
            {categories.map((item, index) => {
              return (
                <SwiperSlide key={index}>
                  <div className={styles.cat_products_card}>
                    <div
                      className={styles.cat_products_card_img}
                      style={{
                        backgroundImage: `url(${item.displayImage})`,
                      }}
                    >
                      <div className={styles.card_img_top_wrap}>
                        {item?.sale != null && (
                          <div className={styles.sale_tag}>SALE</div>
                        )}

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
                    <span>
                      ${item?.sale != null ? item?.sale : item?.price}{" "}
                    </span>{" "}
                    <del>{item?.sale != null && item?.price}</del>
                  </div>
                </SwiperSlide>
              );
            })}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default CategorySlider;
