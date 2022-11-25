import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";

function Timer() {
  const countRef = useRef();
  const [count, setCount] = useState(0);
  const handleCountStart = () => {
    countRef.current = setInterval(() => {
      setCount((count) => count + 1);
    }, 1000);
  };
  const handleCountStop = () => {
    clearInterval(countRef.current);
    countRef.current = null;
  };
  useEffect(() => {
    handleCountStart();
  }, []);
  return (
    <>
      <div>
        <p ref={countRef}>{count}</p>
        <button onClick={handleCountStart}>시작</button>
        <button onClick={handleCountStop}>멈춤</button>
      </div>
      <div></div>
    </>
  );
}

export default Timer;
