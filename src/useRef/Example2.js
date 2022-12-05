import { useRef, useState } from "react";

const Example2 = () => {
  const [renderer, setRenderer] = useState(0);

  // 변수, ref 모두 렌더링 X
  // render 버튼을 눌렀을 때
  // ref : 컴포넌트 생명주기동안 같은 값을 유지함
  // 변수 : 함수가 불릴때마다 0으로 초기화가 됨
  const countRef2 = useRef(0);
  let countVar = 0;

  const increaseRef = () => {
    countRef2.current += 1;
    console.log(`Ref: ${countRef2.current}`);
  };
  const increaseVar = () => {
    countVar += 1;
    console.log(`Var: ${countVar}`);
  };
  const doRenderer = () => {
    setRenderer(renderer + 1);
  };
  return (
    <div>
      <h2>예시 2 - 변수와 ref</h2>
      <p>Ref: {countRef2.current}</p>
      <p>Var: {countVar}</p>
      <button onClick={doRenderer}>Render!</button>
      <button onClick={increaseRef}>Ref + </button>
      <button onClick={increaseVar}>Var +</button>
    </div>
  );
};
export default Example2;
