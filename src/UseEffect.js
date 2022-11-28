import { useEffect, useState } from "react";

const AppUseEffect = () => {
  const sayHello = () => console.log("hello");
  useEffect(sayHello, [number]);

  const [number, setNumber] = useState(0);
  const [aNumber, setAnumber] = useState(0);
  return (
    <div>
      <button
        onClick={() => {
          setNumber(number + 1);
        }}
      >
        {number}
      </button>
      <button
        onClick={() => {
          setAnumber(aNumber + 1);
        }}
      >
        {aNumber}
      </button>
    </div>
  );
};
export default AppUseEffect;
