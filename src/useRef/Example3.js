import { useEffect, useRef, useState } from "react";

const Example3 = () => {
  const [count, setCount] = useState(1);
  const renderCount = useRef(1);
  useEffect(() => {
    renderCount.current += 1;
    console.log("Render:", renderCount.current);
  });
  // 무한 업데이트...
  // state가 변경될때마다 useEffect가 실행되는데, setRenderCount을 통해 renderCount state가 계속 변경되기 때문에 무한 업데이트가 되며 오류가 발생함

  // const [count, setCount] = useState(1);
  // const [renderCount, setRenderCount] = useState(1)
  // useEffect(()=>{
  // console.log("렌더링");
  // setRenderCount(rednerCount + 1);
  // })
  return (
    <div>
      <h2>예시 3 - ref 렌더링</h2>
      <p>count : {count}</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        State 카운트
      </button>
    </div>
  );
};
export default Example3;
