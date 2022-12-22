import React from "react";
import Navbar from "../../components/layout/Navbar";
import styles from "../../css/home/header.module.css";
import SectionOne from "./components/SectionOne";

const Home = () => {
  return (
    <div className={styles.wrapper}>
      <Navbar />
      <SectionOne />
    </div>
  );
};

export default Home;
