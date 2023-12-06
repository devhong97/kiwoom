import { Fragment } from "react";
import Home from "./components/Home/Home";
import "./assets/css/base/main.css";
import "./assets/css/base/slick.css";
import "./assets/css/base/media.css";
import "./assets/scss/index.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div style={{ height: "100%" }}>
      <div className="Screen">
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
