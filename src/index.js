import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import generateStore from "./redux/store";
import "./scss/index.css";
import * as serviceWorker from "./serviceWorker";

let store = generateStore();

const WithRouter = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

const WithStore = () => (
  <Provider store={store}>
    <WithRouter />
  </Provider>
);

ReactDOM.render(<WithStore />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
