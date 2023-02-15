import React from "react";
import Navbar from "../../components/layout/Navbar";
import styles from "../../css/home/header.module.css";
import SectionOne from "./components/SectionOne";
import Sectionthree from "./components/Sectionthree";
import Sectiontwo from "./components/Sectiontwo";

const Home = () => {
  return (
    <div className={styles.wrapper}>
      <SectionOne />
      <Sectiontwo />
      <Sectionthree/>
    </div>
  );
};

export default Home;
