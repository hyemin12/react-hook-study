import { useEffect } from "react";

const useBeforeLeave = (onBefore) => {
  const handle = (event) => {
    // 마우스가 상단바로 올라갔을 때만 실행 clientY <= 0
    if (event.clientY <= 0) {
      onBefore();
    }
  };
  useEffect(() => {
    if (typeof onBefore !== "function") {
      return;
    }
    document.addEventListener("mouseleave", handle);
    return () => document.removeEventListener("mouseleave", handle);
  }, []);
};
const AppUseBeforeLeave = () => {
  const begForLeave = () => console.log("Plz Dont leave");
  useBeforeLeave(begForLeave);
  return (
    <div>
      <h1>Hello</h1>
    </div>
  );
};

export default AppUseBeforeLeave;
