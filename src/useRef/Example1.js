import { useRef, useState } from "react";

const Example1 = () => {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);

  const increaseCountState = () => {
    setCount(count + 1);
  };
  const increaseCountRef = () => {
    countRef.current += 1;
    console.log(`Ref: ${countRef.current}`);
  };
  return (
    <div>
      <h2>예시 1 - state와 ref</h2>
      <p>state : {count}</p>
      <button onClick={increaseCountState}>State 카운트</button>
      <p>Ref : {countRef.current}</p>
      <button onClick={increaseCountRef}>Ref 카운트</button>
    </div>
  );
};
export default Example1;
