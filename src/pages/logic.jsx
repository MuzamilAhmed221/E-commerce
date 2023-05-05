import React from "react";
import { answers } from "../json";

const Logic = () => {
  let object = { answers: [] };
  const handleData = () => {
    answers.qs.map((item, index) => {
      object.answers.push({ qcode: item?.qcode, ans: item?.ans });
    });
  };
  console.log(object);
  return (
    <div>
      <button onClick={handleData}>back</button>
      <button>next</button>
    </div>
  );
};

export default Logic;
