import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import AppCallback from "./useCallback/AppCallback";
import AppMemo from "./useMemo/AppMemo";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/usememo" element={<AppMemo />} />
          <Route path="/usecallback" element={<AppCallback />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
