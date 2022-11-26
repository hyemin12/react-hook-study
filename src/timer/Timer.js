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

  const [countMin, setCountMin] = useState(Math.floor(minutes / 60));
  const [countSec, setCountSec] = useState(Math.floor(seconds / 60));

  const onChange = (e) => {
    const { value, id } = e.target;

    if (id === "minutes" && value >= 0) {
      setMinutes(value);
    } else if (id === "seconds" && value >= 0) {
      setSeconds(value);
    }
  };
  /** 카운트 시작하기 */
  const countStart = () => {
    let totalTime = minutes * 60 + seconds;
    // if (timerRef.current !== null) {
    //   return;
    // }
    if (totalTime === 0) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
    timerRef.current = setInterval(() => {
      console.log(totalTime, countMin, countSec);
      totalTime -= 1;
      setCountMin(Math.floor(totalTime / 60));
      setCountSec(Math.floor(totalTime % 60));
    }, 1000);
  };
  /** 카운트 멈추기 */
  const countStop = () => {
    if (timerRef.current === null) {
      return;
    }
    clearInterval(timerRef.current);
    timerRef.current = null;
  };
  return (
    <>
      <div>
        <p ref={countRef}>{count}</p>
        <button onClick={handleCountStart}>시작</button>
        <button onClick={handleCountStop}>멈춤</button>
      </div>
      <div style={{ padding: "50px 0" }}>
        <input
          id="minutes"
          type="number"
          value={minutes}
          onChange={onChange}
          onKeyUp={onChange}
          style={{ width: "40px" }}
        />
        <label style={{ padding: "0 10px" }}>분 </label>
        <input
          id="seconds"
          type="number"
          value={seconds}
          onChange={onChange}
          onKeyUp={onChange}
          style={{ width: "40px" }}
        />
        <label style={{ padding: "0 10px" }}>초 </label>

        <button onClick={countStart} style={{ marginRight: "4px" }}>
          시작
        </button>
        <button onClick={countStop}>멈춤</button>
        <h4 ref={timerRef}>
          {String(countMin).padStart(2, "0")}:
          {String(countSec).padStart(2, "0")}
        </h4>
      </div>
    </>
  );
}

export default Timer;
