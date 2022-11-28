import { useEffect, useRef } from "react";

const useFadeIn = (duration = 1, delay = 0) => {
  const element = useRef();
  useEffect(() => {
    if (typeof duration !== "number" || typeof delay !== "number") {
      return;
    }

    if (element.current) {
      const { current } = element;
      current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`;
      console.log(`${element.current} !!!`);
      current.style.opacity = 1;
    }
  }, [duration, delay]);
  return { ref: element, style: { opacity: 0 } };
};
console.log("rendered!");

const AppUseFadeIn = () => {
  const fadeInH1 = useFadeIn(1, 2);
  const fadeInP = useFadeIn(3, 4);
  return (
    <div>
      <h1 {...fadeInH1}>Hello~~</h1>
      <p {...fadeInP}>fadeIn2</p>
    </div>
  );
};

export default AppUseFadeIn;
