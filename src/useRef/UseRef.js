import Example1 from "./Example1";
import Example2 from "./Example2";
import Example3 from "./Example3";
import Example4 from "./Example4";

const AppUseRef = () => {
  return (
    <div>
      <p>const ref = useRef(value)</p>
      <p>｛current: value｝ = ref</p>
      <h3>ref 사용하면 좋은 경우</h3>
      <p>1. 저장공간으로 활용할 때 </p>
      <ul>
        <li>state의 변화 → 렌더링 → 컴포넌트 내부 변수들 초기화</li>
        <li>ref의 변화 → 렌더링 X → 변수들의 값이 유지됨</li>
        <li>※불필요한 렌더링을 막을 수 있고, 값을 유지할 수 있음!</li>
      </ul>
      <p>2. Dom 요소에 접근</p>
      <br />
      <Example1 />
      <br />
      <hr />
      <br />
      <Example2 />
      <br />
      <hr />
      <br />
      <Example3 />
      <br />
      <hr />
      <br />
      <Example4 />
    </div>
  );
};

export default AppUseRef;
