import React, { useRef, useState } from "react";

const Refexample = () => {
  const [num, setNum] = useState(10);
  let a = useRef(1);
  const addNum = () => {
    setNum(num + 1);
    a.current = a.current + 1;
    console.log(a);
  };
  return (
    <div>
      <h4>Num is -- {num}</h4>
      <h4>A is -- {a.current}</h4>
      <button onClick={addNum}>Add</button>
    </div>
  );
};
export default Refexample;
