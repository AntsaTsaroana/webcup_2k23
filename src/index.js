import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";

import Loading from "./Components/Loading";
import "./Assets/css/index.scss";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
