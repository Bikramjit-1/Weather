import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { ContextProvider } from "./useContext";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Router>
    <ContextProvider>
      <App />
    </ContextProvider>
  </Router>,
  rootElement
);
