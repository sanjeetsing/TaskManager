// index.js
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import store from "./store/store";
import Modal from "react-modal"; // Import react-modal

// Set the root element for react-modal
Modal.setAppElement("#root");

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
