import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import CalculadoraEstandar from "./components/CalculadoraEstandar/index.tsx";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
    {/* <CalculadoraEstandar /> */}
  </React.StrictMode>
);
