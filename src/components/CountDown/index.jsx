import React, { memo } from "react";
import { useCountdown } from "../../hooks/CustomHooks";
import styles from "../../css/home/sectiontwo.module.css";

const CountDown = () => {
  const newYears = "5 may 2023";
  const { memoize } = useCountdown({ newYears });
  const { days, hours, mins, seconds } = memoize;

  return (
    <div className={` container_fluid ${styles.deal_item_images}`}>
      <div className={styles.deals_discriptions}>
        <h3>Deal Of The Week</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do ipsum
          dolor sit amet, consectetur adipisicing eli
        </p>
        <h4>
          $35.00 <span> / HanBag</span>
        </h4>
        <div className={styles.time_wrapper}>
          <div className={styles.time}>
            {days < 10 ? "0" + days : days}

            <h5>days</h5>
          </div>

          <div className={styles.time}>
            {hours < 10 ? "0" + hours : hours}
            <h5>HRS</h5>
          </div>
          <div className={styles.time}>
            {mins < 10 ? "0" + mins : mins}
            <h5>mins</h5>
          </div>
          <div className={styles.time}>
            {seconds < 10 ? "0" + seconds : seconds}

            <h5>secs</h5>
          </div>
        </div>
        <button className={styles.shopnowbtn}>shop now</button>
      </div>
    </div>
  );
};

export default memo(CountDown);
