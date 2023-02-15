import React from "react";
import styles from "../../../css/home/sectionthree.module.css";
import { TfiInstagram } from "react-icons/tfi";
import { SlCalender } from "react-icons/sl";
import { BiMessageRounded } from "react-icons/bi";

const Sectionthree = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.collection_gal_wrapper}>
        {[...new Array(6).fill("")].map((item, index) => {
          return (
            <div
              className={styles.image_wrapper}
              style={{
                backgroundImage: `url('https://preview.colorlib.com/theme/fashi/img/insta-${
                  index + 1
                }.jpg')`,
              }}
              key={index}
            >
              <div className={styles.center_icons_wrap}>
                <span>
                  <TfiInstagram />
                </span>
                <h5>colorlib_Collection</h5>
              </div>
            </div>
          );
        })}
      </div>
      <div className={`container ${styles.blogs_wrapper}`}>
        <h3>From the Blog</h3>
        <div className={styles.blogs}>
          {[...new Array(3).fill("")].map((item, index) => {
            return (
              <div className={styles.blog_container} key={index}>
                <div
                  className={styles.blog_img}
                  style={{
                    backgroundImage: `url(	https://preview.colorlib.com/theme/fashi/img/latest-${
                      index + 1
                    }.jpg)`,
                  }}
                ></div>
                <div className={styles.date_wrap}>
                  <p>
                    <span>
                      <SlCalender />
                    </span>
                    May 4,2019
                    <span>
                      <BiMessageRounded />
                    </span>
                    5
                  </p>
                </div>
                <h5>The Best Street Style From London Fashion Week</h5>
                <p>
                  Sed quia non numquam modi tempora indunt ut labore et dolore
                  magnam aliquam quaerat
                </p>
              </div>
            );
          })}
        </div>
      </div>

      <div className={` container ${styles.services_wrapper}`}>
        {[...new Array(3).fill("")].map((item,index) => {
      
          return (
            <div className={styles.service}>
              <div
                className={styles.icon}
                style={{
                  width: index==1 && "34px",
                  backgroundImage: `url(https://preview.colorlib.com/theme/fashi/img/icon-${index==1?2:1}.png)`,
                }}
              ></div>
              <div className={styles.service_text}>
                <h6>Free Shipping</h6>
                <h6>For all order over 99$</h6>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sectionthree;
