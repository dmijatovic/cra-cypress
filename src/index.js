import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
// import App from "./App";

import Layout from "./components/layout";

import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<Layout />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
