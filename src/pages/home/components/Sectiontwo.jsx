import React, { useRef, useState } from "react";
import styles from "../../../css/home/sectiontwo.module.css";
import { mens_cat } from "../../../helper/Helper";
import CategorySlider from "./CategorySlider";

const Sectiontwo = () => {
  const [days, setDays] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [hours, setHours] = useState(0);

  const [mins, setMins] = useState(0);

  const newYears = "13 april 2023";

  function countdown() {
    if (newYears) {
      const newYearsDate = new Date(newYears);
      const currentDate = new Date();
      const totalSeconds = (newYearsDate - currentDate) / 1000;

      setDays(Math.floor(totalSeconds / 3600 / 24));
      setHours(Math.floor(totalSeconds / 3600) % 24);
      setMins(Math.floor(totalSeconds / 60) % 60);
      setSeconds(Math.floor(totalSeconds) % 60);
    } else {
    }
  }
  newYears && setInterval(countdown, 1000);
  return (
    <div className={styles.home_sectiontwo}>
      <div className={` container_fluid ${styles.deal_item_images}`}>
        <div className={styles.deals_discriptions}>
          <h3>Deal Of The Week</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            ipsum dolor sit amet, consectetur adipisicing eli
          </p>
          <h4>
            $35.00 <span> / HanBag</span>
          </h4>
          <div className={styles.time_wrapper}>
            <div className={styles.time}>
              {days}
              <h5>days</h5>
            </div>

            <div className={styles.time}>
              {hours}
              <h5>HRS</h5>
            </div>
            <div className={styles.time}>
              {mins}
              <h5>mins</h5>
            </div>
            <div className={styles.time}>
              {seconds} <h5>secs</h5>
            </div>
          </div>
          <button className={styles.shopnowbtn}>shop now</button>
        </div>
      </div>
      <CategorySlider
        style={{ flexDirection: "row-reverse" }}
        categories={mens_cat}
        postername="Men's"
        posterimage={require("../../../assets/images/man-large.jpg.webp")}
      />
    </div>
  );
};

export default Sectiontwo;
