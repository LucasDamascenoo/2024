import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App name={"midudev"} tt={"@midudev"} />
    <App name={"ElonMusk"} tt={"@elonmusk"} />
    <App name={"Neymar"} tt={"@MrBeast"} />
  </React.StrictMode>
);
