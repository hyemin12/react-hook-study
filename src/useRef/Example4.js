import { useEffect, useRef } from "react";

const Example4 = () => {
  const inputRef = useRef();
  useEffect(() => {
    const timer = setTimeout(() => {
      inputRef.current.focus();
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const login = () => {
    alert(`환영합니다. ${inputRef.current.value} `);
    inputRef.current.focus();
  };
  return (
    <div>
      <h2>예시 4 - Dom 요소에 접근</h2>
      <input type="text" placeholder="아이디를 입력하세요" ref={inputRef} />
      <button onClick={login}>로그인</button>
    </div>
  );
};

export default Example4;
