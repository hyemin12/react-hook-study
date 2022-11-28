import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import Timer from "./timer/Timer";
import AppCallback from "./useCallback/AppCallback";
import AppUseInput from "./useInput/UseInput";
import AppMemo from "./useMemo/AppMemo";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/usememo" element={<AppMemo />} />
          <Route path="/usecallback" element={<AppCallback />} />
          <Route path="/useInput" element={<AppUseInput />} />
          <Route path="/timer" element={<Timer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
