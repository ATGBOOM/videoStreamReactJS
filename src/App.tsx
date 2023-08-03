

import "./App.css";

import WatchingVideoPage from "./components/watching_video_page.tsx";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import HomePage from "./components/home_page.tsx";

function App() {


  return (
    <>
    <div className = "body">
      <BrowserRouter>
        <Routes>
          <Route path="/app" element={<App />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/watch" element={<WatchingVideoPage />} />
        </Routes>
      </BrowserRouter>
      </div>
    </>
  );
}

export default App;
