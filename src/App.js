import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import AppUseBeforeLeave from "./useBeforeLeave/UseBeforeLeave";
import AppCallback from "./useCallback/AppCallback";
import AppUseClick from "./useClick/UseClick";
import AppUseConfirm from "./useConfirm/UseConfirm";
import AppUseEffect from "./UseEffect";
import AppUseFadeIn from "./useFadeIn/UseFadeIn";
import AppUseFullScreen from "./useFullScreen/UseFullScreen";
import AppUseInput from "./useInput/UseInput";
import AppMemo from "./useMemo/AppMemo";
import AppUseNetwork from "./useNetwork/UseNetwork";
import AppUsePreventLeave from "./usePreventLeave/usePreventLeave";
import AppUseScroll from "./useScroll/UseScroll";
import AppUseTabs from "./useTabs/UseTabs";
import AppUseTitle from "./useTitle/UseTitle";
import Timer from "./timer/Timer";
import AppUseNotification from "./useNotification/UseNotification";

import AppUseLocalStorage from "./useLocalStorage/useLocalStorage";
import AppUseAxios from "./useAxios/AppUseAxios";
import AppUseReducer from "./useReducer/useReducer";
import AppUseRef from "./useRef/UseRef";

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
          <Route path="/useNetwork" element={<AppUseNetwork />} />
          <Route path="/useScroll" element={<AppUseScroll />} />
          <Route path="/useFullScreen" element={<AppUseFullScreen />} />
          <Route path="/useNotification" element={<AppUseNotification />} />
          <Route path="/useAxios" element={<AppUseAxios />} />
          <Route path="/useLocalStorage" element={<AppUseLocalStorage />} />
          <Route path="/useReducer" element={<AppUseReducer />} />
          <Route path="/useRef" element={<AppUseRef />} />

          <Route path="/timer" element={<Timer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
