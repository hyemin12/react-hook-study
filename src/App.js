import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import Timer from "./timer/Timer";
import AppUseBeforeLeave from "./useBeforeLeave/UseBeforeLeave";
import AppCallback from "./useCallback/AppCallback";
import AppUseClick from "./useClick/UseClick";
import AppUseConfirm from "./useConfirm/UseConfirm";
import AppUseEffect from "./UseEffect";
import AppUseFadeIn from "./useFadeIn/UseFadeIn";
import AppUseInput from "./useInput/UseInput";
import AppMemo from "./useMemo/AppMemo";
import AppUsePreventLeave from "./usePreventLeave/usePreventLeave";
import AppUseTabs from "./useTabs/UseTabs";
import AppUseTitle from "./useTitle/UseTitle";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/usememo" element={<AppMemo />} />
          <Route path="/usecallback" element={<AppCallback />} />
          <Route path="/useInput" element={<AppUseInput />} />
          <Route path="/useTabs" element={<AppUseTabs />} />
          <Route path="/useEffect" element={<AppUseEffect />} />
          <Route path="/useTitle" element={<AppUseTitle />} />
          <Route path="/useClick" element={<AppUseClick />} />
          <Route path="/useConfirm" element={<AppUseConfirm />} />
          <Route path="/usePreventLeave" element={<AppUsePreventLeave />} />
          <Route path="/useBeforeLeave" element={<AppUseBeforeLeave />} />
          <Route path="/useFadeIn" element={<AppUseFadeIn />} />
          <Route path="/timer" element={<Timer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
