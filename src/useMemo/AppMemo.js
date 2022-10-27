const { useState } = require("react");
const { default: ShowState } = require("./ShowState");

function AppMemo() {
  const [number, setNumber] = useState(0);
  const [text, setText] = useState("");

  const increaseNum = () => {
    setNumber((prevState) => prevState + 1);
  };
  const decreaseNum = () => {
    setNumber((prevState) => prevState - 1);
  };

  const onChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <button onClick={increaseNum}>+</button>
      <button onClick={decreaseNum}>-</button>
      <input type="text" placeholder="Text" onChange={onChange} />
      <ShowState number={number} text={text} />
    </div>
  );
}

export default AppMemo;
