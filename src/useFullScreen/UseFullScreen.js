import { useRef } from "react";

const useFullScreen = () => {
  const element = useRef();
  const triggerFull = () => {
    if (element.current.requestFullscreen)
      return element.current.requestFullscreen();
    if (element.current.webkitRequestFullscreen)
      return element.current.webkitRequestFullscreen();
    if (element.current.mozRequestFullScreen)
      return element.current.mozRequestFullScreen();
    if (element.current.msRequestFullscreen)
      return element.current.msRequestFullscreen();
  };
  const exitFull = () => {
    if (document.exitFullscreen) return document.exitFullscreen();
    if (document.webkitCancelFullscreen)
      return document.webkitCancelFullscreen();
    if (document.mozCancelFullScreen) return document.mozCancelFullScreen();
    if (document.msExitFullscreen) return document.msExitFullscreen();
  };
  return { element, triggerFull, exitFull };
};

const AppUseFullScreen = () => {
  const { element, triggerFull, exitFull } = useFullScreen();
  return (
    <div>
      <img
        src="https://images.unsplash.com/photo-1544212415-b269f18bf7ed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"
        alt="이미지!"
        ref={element}
      />

      <button onClick={triggerFull}>Make FullScreen</button>
      <button onClick={exitFull}>Exit FullScreen</button>
    </div>
  );
};

export default AppUseFullScreen;
