import React from "react";
import ReactDOM from "react-dom/client";

import "./styles.css";
import Header from "./components/Header";
import App from "./App";
import Footer from "./components/Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Header />
    <main>
      <App />
    </main>
    <Footer />
  </React.StrictMode>
);
