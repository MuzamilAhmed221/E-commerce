import { CgFacebook, CgInstagram} from "react-icons/cg";
import {  TfiTwitterAlt} from "react-icons/tfi";

import { IoLogoPinterest } from "react-icons/io";

export const navItems = [
  "home",
  "shop",
  "collection",
  "blog",
  "contact",
  "pages",
];
export const womens_cat = [
  {
    name: "Guangzhou sweater",
    category: "Shoes",
    price: 10.0,
    sale: 9.0,
    displayImage: require("../assets/images/women-1.jpg.webp"),
  },
  {
    name: "Guangzhou sweater",
    category: "Towel",
    price: 13.0,
    sale: null,
    displayImage: require("../assets/images/women-2.jpg.webp"),
  },
  {
    name: "Guangzhou sweater",
    category: "coat",
    price: 55.0,
    sale: null,
    displayImage: require("../assets/images/women-3.jpg.webp"),
  },
  {
    name: "Guangzhou sweater",
    category: "towel",
    price: 34.0,
    sale: null,
    displayImage: require("../assets/images/women-4.jpg.webp"),
  },
];
export const mens_cat = [
  {
    name: "Guangzhou sweater",
    category: "Shoes",
    price: 10.0,
    sale: 9.0,
    displayImage: require("../assets/images/man-1.jpg.webp"),
  },
  {
    name: "Guangzhou sweater",
    category: "Towel",
    price: 13.0,
    sale: null,
    displayImage: require("../assets/images/man-2.jpg.webp"),
  },
  {
    name: "Guangzhou sweater",
    category: "coat",
    price: 55.0,
    sale: null,
    displayImage: require("../assets/images/man-3.jpg.webp"),
  },
  {
    name: "Guangzhou sweater",
    category: "towel",
    price: 34.0,
    sale: 24.0,
    displayImage: require("../assets/images/man-4.jpg.webp"),
  },
];
export const categoryname = ["Clothings", "Handbag", "Shoes", "Accessories"];
export const collectionGallery = [
  {
    img: require("https://preview.colorlib.com/theme/fashi/img/insta-1.jpg"),
    username: "colorlib_Collection",
  },
  {
    img: require("https://preview.colorlib.com/theme/fashi/img/insta-2.jpg"),
    username: "colorlib_Collection",
  },
  {
    img: require("https://preview.colorlib.com/theme/fashi/img/insta-3.jpg"),
    username: "colorlib_Collection",
  },
  {
    img: require("https://preview.colorlib.com/theme/fashi/img/insta-1.jpg"),
    username: "colorlib_Collection",
  },
  {
    img: require("https://preview.colorlib.com/theme/fashi/img/insta-1.jpg"),
    username: "colorlib_Collection",
  },
  {
    img: require("https://preview.colorlib.com/theme/fashi/img/insta-1.jpg"),
    username: "colorlib_Collection",
  },
];
export const information = ["About us", "checkout", "contact", "serivius"];
export const myAccount = ["my account ", "contact", "shopping cart", "shop"];
export const socialIcon = [
  <CgFacebook />,
  <CgInstagram />,
  <TfiTwitterAlt />,
  <IoLogoPinterest />,
];
