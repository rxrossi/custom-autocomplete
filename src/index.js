import React from "react";
import ReactDOM from "react-dom";
import List from "./List";

import "./styles.css";

const ESC = 38;
const TAB = 9;

function App() {
  return (
    <List onChange={console.log}>
      <li>a</li>
      <li>b</li>
      <li>c</li>
    </List>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
