import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import AppManager from "./utils/contexts/AppContext.jsx";
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AppManager>
    <App />
    <Toaster position="bottom-right" reverseOrder={false} />
  </AppManager>
);
