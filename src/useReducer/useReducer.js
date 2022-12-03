import EgBank from "./EgBank";
import EgStudent from "./EgStudent";

const AppUseReducer = () => {
  return (
    <div>
      <div>
        <h2>useReducer</h2>
        <ul>
          <li>state를 생성하고 관리할 수 있게 해주는 훅</li>
          <li>reducer : state를 업데이트 하는 역할</li>
          <li>dispatch : state 업데이트를 위한 요구 </li>
          <li>action : 요구의 내용 </li>
        </ul>
      </div>
      <br />
      <br />

      <EgBank />
      <br />
      <br />

      <EgStudent />
    </div>
  );
};

export default AppUseReducer;
