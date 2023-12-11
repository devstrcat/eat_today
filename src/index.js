import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// css 초기화
import "./styles/normalize.css";
import "./styles/index.css";
// font 적용
import "./styles/font.css";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);
