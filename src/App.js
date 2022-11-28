import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import Timer from "./timer/Timer";
import AppCallback from "./useCallback/AppCallback";
import AppUseEffect from "./UseEffect";
import AppUseInput from "./useInput/UseInput";
import AppMemo from "./useMemo/AppMemo";
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
          <Route path="/timer" element={<Timer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
