import React from "react";
import { Link } from "react-router-dom";
import styles from "../../css/layout/footer.module.css";
import { information, myAccount, socialIcon } from "../../helper/Helper";

const Footer = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.brands_wrap}>
        <div className={` container ${styles.footer_top_brands}`}>
          {[...new Array(5).fill("")].map((item, index) => {
            return (
              <div className={styles.brand_logo_wrapper} key={index}>
                <div
                  className={styles.brand_logo}
                  style={{
                    backgroundImage: `url(https://preview.colorlib.com/theme/fashi/img/logo-carousel/logo-${
                      index + 1
                    }.png)`,
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>

      <div className={styles.footer_section}>
        <div className={` container ${styles.section_row}`}>
          <div className={styles.shop_info_col}>
            <div
              className={styles.footer_img}
              style={{
                backgroundImage: `url(https://preview.colorlib.com/theme/fashi/img/footer-logo.png
)`,
              }}
            />
            <p>
              Address: 60-49 Road 11378 New  York
            </p>
            <p>Phone: +65 11.188.888</p>

            <p>Email: hello.colorlib@gmail.com</p>
            <div className={styles.social_icon_wrap}>
              {socialIcon.map((item, index) => {
                return <div className={styles.social_icon} key={index}>{item}</div>;
              })}
            </div>
          </div>
          <div className={styles.footer_nav_col}>
            <h6>Information</h6>
            {information.map((item, index) => {
              return (
                <Link to={item} key={index}>
                  <p>{item}</p>
                </Link>
              );
            })}
          </div>
          <div className={styles.footer_nav_col}>
            <h6>My Account</h6>
            {myAccount.map((item, index) => {
              return (
                <Link to={item} key={index}>
                  <p>{item}</p>
                </Link>
              );
            })}
          </div>
          <div className={styles.newsletter_col}>
            <h6>Join Our Newsletter Now</h6>
            <p>Get E-mail updates about our latest shop and special offers.</p>
            <div className={styles.subscribe_input_wrap}>
              <input type="text" placeholder="Enter Your Email" />
              <button>Subscribe</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
