const usePreventLeave = (onLeaving) => {
  const listener = (event) => {
    event.preventDefault();
    event.returnValue = "";
  };
  /** BeforeUnload : 윈도우가 닫히기 전에 함수가 실행하는 것을 허락
   * enablePrevent : 닫을 때 confirm 창 나타남
   * disablePrevent : 닫을 때 아무런 행동이 일어나지 않음 (이벤트를 지웠기때문에)
   */
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
