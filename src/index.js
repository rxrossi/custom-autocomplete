import React from "react";
import ReactDOM from "react-dom";
import List from "./List";

import "./styles.css";

function App() {
  const [value, setValue] = React.useState("");

  function onListFocus(child) {
    setValue(child.props.children);
  }

  return (
    <>
      <input
        value={value}
        onChange={e => {
          setValue(e.target.value);
        }}
      />
      <List
        onChange={onListFocus}
        focusedStyle={{
          background: "#999"
        }}
      >
        <li>a</li>
        <li>b</li>
        <li>c</li>
      </List>
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
