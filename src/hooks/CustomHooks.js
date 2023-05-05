import { useMemo, useState } from "react";

export const useCountdown = (props) => {
  const [days, setDays] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [hours, setHours] = useState(0);
  const [mins, setMins] = useState(0);

  function countdown() {
    let d = new Date()
    const newYearsDate = new Date(props?.newYears);
    if (newYearsDate > d  ) {
      const currentDate = new Date();
      const totalSeconds = (newYearsDate - currentDate) / 1000;

      setDays(Math.floor(totalSeconds / 3600 / 24));
      setHours(Math.floor(totalSeconds / 3600) % 24);
      setMins(Math.floor(totalSeconds / 60) % 60);
      setSeconds(Math.floor(totalSeconds) % 60);
    } else {
    }
  }

  props?.newYears && setInterval(countdown, 1000);
  let memoize = useMemo(() => {
    return{ days, hours, mins, seconds}
  }, [countdown]);
  return { memoize };
};
