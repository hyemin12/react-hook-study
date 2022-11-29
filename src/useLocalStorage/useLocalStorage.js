import { useEffect, useState } from "react";
const useLocalStorage = (key, initialState) => {
  const getData = JSON.parse(localStorage.getItem(key));
  const [state, setState] = useState(getData || initialState);
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [state]);
  return [state, setState];
};
const AppUseLocalStorage = () => {
  const [count, setCount] = useLocalStorage("count", 0);
  const [on, setOn] = useLocalStorage("switch", false);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>{count}</button>
      <button onClick={() => setOn(!on)}>{on ? "On" : "Off"}</button>
    </div>
  );
};

export default AppUseLocalStorage;
