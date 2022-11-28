import { useEffect, useRef } from "react";

const useClick = (onClick) => {
  const elementRef = useRef();

  useEffect(() => {
    if (typeof onClick !== "function") {
      return;
    }
    if (elementRef.current) {
      elementRef.current.addEventListener("click", onClick);
    }
    return () => {
      if (elementRef.current) {
        elementRef.current.removeEventListener("click", onClick);
      }
    };
  }, []);
  return typeof onClick !== "function" ? elementRef : undefined;
};

const AppUseClick = () => {
  const sayHello = () => console.log("say hello~");
  const title = useClick(sayHello);

  return (
    <div>
      <h1 ref={title}>Hello</h1>
      {/* <input placeholder="Write!" ref={inputRef} /> */}
    </div>
  );
};

export default AppUseClick;
