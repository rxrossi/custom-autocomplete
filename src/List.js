import React from "react";

const ARROW_UP = 38;
const ARROW_DOWN = 40;

function List({ onChange, children }) {
  const [focus, setFocus] = React.useState(null);

  function focusNext() {
    if (!Number.isFinite(focus) || focus === children.length - 1) {
      return setFocus(0);
    }
    setFocus(focus + 1);
  }

  function focusPrev() {
    if (!focus) {
      return setFocus(children.length - 1);
    }
    setFocus(focus - 1);
  }

  React.useEffect(() => {
    function onKeyDown(e) {
      switch (e.keyCode) {
        case ARROW_DOWN:
          e.preventDefault();
          focusNext();
          break;
        case ARROW_UP:
          e.preventDefault();
          focusPrev();
          break;
        default:
          break;
      }
    }
    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  });

  return children.map((child, i) =>
    React.cloneElement(child, {
      key: i,
      style:
        i === focus
          ? {
              background: "red"
            }
          : {}
    })
  );
}

export default List;
