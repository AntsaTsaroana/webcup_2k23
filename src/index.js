import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";

import "./Assets/css/index.scss";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Suspense fallback="Chargement ...">
        <App />
      </Suspense>
  </React.StrictMode>
);
