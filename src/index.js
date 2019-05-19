import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import List from "./List";

import "./styles.css";

const Wrapper = styled.ul`
  border: 1px solid red;
  padding: 5px;
`;

const Li = styled.li`
  border: 1px solid green;
  margin: 5px;
  background: ${props => (props.focused ? "red" : "initial")};
`;

function App() {
  const [value, setValue] = React.useState("");

  function onListFocus(child) {
    console.log(child.props);
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
        wrapper={Wrapper}
        onChange={onListFocus}
        focusProp="focused"
        focusedStyle={{
          background: "#999"
        }}
      >
        <Li>a</Li>
        <Li>b</Li>
        <Li>c</Li>
      </List>
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
