import { Link } from "react-router-dom";

function Home() {
  const nav = [
    "usememo",
    "usecallback",
    "useInput",
    "useTabs",
    "useEffect",
    "useTitle",
    "useClick",
    "useConfirm",
    "useConfirm",
    "usePreventLeave",
    "useBeforeLeave",
    "useFadeIn",
    "useNetwork",
    "useScroll",
    "useFullScreen",
    "useNotification",
    "useAxios",
    "useLocalStorage",
    "timer",
    "useReducer",
  ];
  return (
    <div className="container">
      <h1>렌더링 성능 최적화 및 리액트 훅 공부하기</h1>
      <div className="links">
        {nav.map((item, idx) => (
          <Link to={`/${item}`} key={idx}>
            {idx + 1}. {item}()
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Home;
