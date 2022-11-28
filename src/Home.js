import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container">
      <h1>렌더링 성능 최적화 및 리액트 훅 공부하기</h1>
      <div className="links">
        <Link to="/usememo">useMemo()</Link>
        <Link to="/usecallback">useCallback()</Link>
        <Link to="/useInput">useInput()</Link>
        <Link to="/useTabs">useTabs()</Link>
        <Link to="/useEffect">useEffect()</Link>
        <Link to="/useTitle">useTitle()</Link>
        <Link to="/useClick">useClick()</Link>
        <Link to="/timer">timer</Link>
      </div>
    </div>
  );
}

export default Home;
