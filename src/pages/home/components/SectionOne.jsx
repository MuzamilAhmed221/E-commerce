import { style } from "@mui/system";
import { Link } from "react-router-dom";
import Carousel from "../../../components/carousal";
import styles from "../../../css/home/sectionone.module.css";
import { BsBag, BsHeart, BsShuffle } from "react-icons/bs";
import { SwiperSlide } from "swiper/react";
import { womens_cat } from "../../../helper/Helper";

const SectionOne = () => {
  let cat = ["Men's", "Women's", "Kid's"];
  return (
    <div className={styles.wrapper}>
      <div className={`container_fluid  ${styles.categories_wrap}`}>
        {cat.map((item, index) => {
          return (
            <div
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
      <div className={`container_fluid ${styles.cat_products_wrap}`}>
        <div
          className={styles.cat_poster}
          style={{
            backgroundImage: `url(${require("../../../assets/images/women-large.jpg.webp")})`,
          }}
        >
          <h2>Women's</h2>
          <Link to="# ">Discover more</Link>
        </div>
        <div className={styles.cat_products_carousel}>
          {/* <div className={styles.cat_products_card}>
            <div
              className={styles.cat_products_card_img}
              style={{
                backgroundImage: `url(${require("../../../assets/images/women-1.jpg.webp")})`,
              }}
            >
              <div className={styles.card_img_top_wrap}>
                <div className={styles.sale_tag}>SALE</div>
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
            <span>$14.000 </span> <del>2500</del>
          </div> */}
          <div className={styles.crousel_wrapper}>
            <Carousel>
              {womens_cat.map(() => {
                return (
                  <SwiperSlide>
                    <div className={styles.cat_products_card}>
                      <div
                        className={styles.cat_products_card_img}
                        style={{
                          backgroundImage: `url(${require("../../../assets/images/women-1.jpg.webp")})`,
                        }}
                      >
                        <div className={styles.card_img_top_wrap}>
                          <div className={styles.sale_tag}>SALE</div>
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
                      <span>$14.000 </span> <del>2500</del>
                    </div>
                  </SwiperSlide>
                );
              })}
              <SwiperSlide>
                <div className={styles.cat_products_card}>
                  <div
                    className={styles.cat_products_card_img}
                    style={{
                      backgroundImage: `url(${require("../../../assets/images/women-1.jpg.webp")})`,
                    }}
                  >
                    <div className={styles.card_img_top_wrap}>
                      <div className={styles.sale_tag}>SALE</div>
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
                  <span>$14.000 </span> <del>2500</del>
                </div>
              </SwiperSlide>
              <SwiperSlide>Slide 2</SwiperSlide>
              <SwiperSlide>Slide 3</SwiperSlide>
              <SwiperSlide>Slide 4</SwiperSlide>
              <SwiperSlide>Slide 5</SwiperSlide>
              <SwiperSlide>Slide 6</SwiperSlide>
              <SwiperSlide>Slide 7</SwiperSlide>
              <SwiperSlide>Slide 8</SwiperSlide>
              <SwiperSlide>Slide 9</SwiperSlide>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionOne;
