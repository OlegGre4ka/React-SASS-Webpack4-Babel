import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";

import "./a";
import TestAsk from "./TestAsk";
ReactDOM.render(
  <>
    <h2>
      Hello bro, React is working with <span>Webpack</span> and{" "}
      <span>SCSS</span> here!
    </h2>
    <TestAsk />
  </>,
  document.getElementById("root")
);
