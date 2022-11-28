const usePreventLeave = (onLeaving) => {
  const listener = (event) => {
    event.preventDefault();
    event.returnValue = "";
  };
  /** BeforeUnload : 윈도우가 닫히기 전에 함수가 실행하는 것을 허락 */
  const enablePrevent = () => {
    window.addEventListener("BeforeUnload", listener);
  };
  const disablePrevent = () => {
    window.removeEventListener("BeforeUnload", listener);
  };
  return {
    enablePrevent,
    disablePrevent,
  };
};

const AppUsePreventLeave = () => {
  const { enablePrevent, disablePrevent } = usePreventLeave();
  return (
    <div>
      <button onClick={enablePrevent}>Protect</button>
      <button onClick={disablePrevent}>Unprotect</button>
    </div>
  );
};

export default AppUsePreventLeave;
