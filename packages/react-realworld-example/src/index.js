import React from "react";
import { hydrate, render } from "react-dom";
import "./styles/index.css";
import App from "./components/App";
import registerServiceWorker from "./registerServiceWorker";
/* global document */
/* eslint-disable react/jsx-filename-extension */
const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
  hydrate(<App />, rootElement);
} else {
  render(<App />, rootElement);
}
registerServiceWorker();
