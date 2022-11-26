import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";

function Timer() {
  const countRef = useRef();
  const [count, setCount] = useState(0);
  const [paused, setPaused] = useState(true);
  const handleCountStart = () => {
    setPaused(false);
    if (!paused) {
      countRef.current = setInterval(() => {
        setCount((count) => count + 1);
      }, 1000);
    }
  };
  // useEffect(() => {
  //   handleCountStart();
  // }, []);
  const handleCountStop = () => {
    clearInterval(countRef.current);
    setPaused(true);
  };

  /** 시간 타이머 */
  const timerRef = useRef(null);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  let totalTime = parseInt(minutes * 60 + seconds);

  console.log(typeof totalTime, totalTime / 60);

  const [countMin, setCountMin] = useState(Math.floor(totalTime / 60));
  const [countSec, setCountSec] = useState(Math.floor(totalTime % 60));

  const onChange = (e) => {
    const { value, id } = e.target;
    if (id === "minutes") {
      setMinutes(value);
    } else if (id === "seconds") {
      if (parseInt(value) > 59) {
        // const min = parseInt(value / 60);
        // console.log(value, min);
        // setMinutes(minutes + min);
      }
      setSeconds(value);
      setCountSec(value);
    }
  };
  const convertFormat = (num) => {
    String(num).padStart(2, "0");
  };
  const countStart = () => {
    if (timerRef.current !== null) {
      return;
    }
    timerRef.current = setInterval(() => {
      setMinutes(convertFormat(parseInt(totalTime / 60)));
      setSeconds(convertFormat(parseInt(totalTime % 60)));
    }, 1000);
  };
  const countStop = () => {
    if (timerRef.current === null) {
      return;
    }
    clearInterval(timerRef.current);
    timerRef.current = null;
  };
  // console.log(minutes, seconds, countSec);
  return (
    <>
      <div>
        <p ref={countRef}>{count}</p>
        <button onClick={handleCountStart}>시작</button>
        <button onClick={handleCountStop}>멈춤</button>
      </div>
      <div style={{ padding: "50px 0" }}>
        <label>분 : </label>
        <input id="minutes" type="number" value={minutes} onChange={onChange} />
        <label>초 : </label>
        <input id="seconds" type="number" value={seconds} onChange={onChange} />
        <h4>
          {String(countMin).padStart(2, "0")}:
          {String(countSec).padStart(2, "0")}
        </h4>
        <button onClick={countStart}>시작</button>
        <button onClick={countStop}>멈춤</button>
      </div>
    </>
  );
}

export default Timer;
