import React, { useState } from "react";
import styles from "../../css/layout/navbar.module.css";
import { IoMdMail } from "react-icons/io";
import { ImPhone } from "react-icons/im";
import { TfiMenu } from "react-icons/tfi";
import { BiChevronDown } from "react-icons/bi";
import {
  FaFacebookF,
  FaTwitter,
  FaPinterestP,
  FaLinkedinIn,
  FaUser,
} from "react-icons/fa";
import { BsHeart, BsBag, BsSearch } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { navItems } from "../../helper/Helper";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.top_contacts_wrapper}>
        <div className={` container ${styles.top_contacts}`}>
          <div className={styles.email}>
            <IoMdMail /> <p> hello.colorlib@gmail.com</p>
          </div>
          <div className={styles.phone}>
            <ImPhone /> <p>+9203123108700</p>
          </div>
          <div className={styles.social_links}>
            <span>
              <FaFacebookF />
            </span>
            <span>
              <FaTwitter />
            </span>
            <span>
              <FaLinkedinIn />
            </span>
            <span>
              <FaPinterestP />
            </span>
          </div>
          <div className={styles.language_selector}>
            <select name="cars" id="cars">
              <option value="volvo">English</option>
              <option value="saab">Germany</option>
              <option value="mercedes">Mercedes</option>
              <option value="audi">Audi</option>
            </select>
          </div>
          <div className={styles.login_btn}>
            <FaUser /> <p>Login</p>
          </div>
        </div>
      </div>
      <div className={`container ${styles.center_nav_section}`}>
        <div className={styles.brand_logo} />
        <div className={styles.select_category}>
          <select name="category" id="caategory">
            <option value="english">All Category</option>
            <option value="saab">Germany</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
          </select>
          <input type="search" name="search" placeholder="What do you need" />
          <button className={styles.search_btn}>
            <BsSearch />
          </button>
        </div>
        <div className={styles.cart_sec}>
          <span>
            <BsHeart />
          </span>
          <span>
            <BsBag />
          </span>
          <p>$150.00</p>
        </div>
      </div>

      <div className={styles.navbar}>
        <div className={` container ${styles.top_navbar}`}>
          <div>
            <span>
              <TfiMenu />
            </span>
            ALL DEPARTMENTS
            <span>
              <BiChevronDown />
            </span>
          </div>
          <ul>
            {navItems.map((item, index) => {
              return (
                <li key={index}>
                <Link to={`/${index != 0 ? item: ""}`}>{item}</Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className={` container ${styles.bottom_navbar}`}>
          <div>
            MENU{" "}
            <span>
              <GiHamburgerMenu />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
