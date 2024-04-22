import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import AppManager from "./utils/contexts/AppContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AppManager>
    <App />
  </AppManager>
);
