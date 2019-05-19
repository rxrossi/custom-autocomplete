import React from "react";

const ARROW_UP = 38;
const ARROW_DOWN = 40;

function getNextFocus(focus, count) {
  return !Number.isFinite(focus) || focus === count - 1 ? 0 : focus + 1;
}
function getPrevFocus(focus, count) {
  return focus ? focus - 1 : count - 1;
}

function List({ onChange, children, focusedStyle }) {
  const [focus, setFocus] = React.useState(null);

  React.useEffect(() => {
    function onKeyDown(e) {
      switch (e.keyCode) {
        case ARROW_DOWN:
          e.preventDefault();
          const nextFocus = getNextFocus(focus, children.length);
          setFocus(nextFocus);
          onChange(children[nextFocus]);
          break;
        case ARROW_UP:
          e.preventDefault();
          const prevFocus = getPrevFocus(focus, children.length);
          setFocus(prevFocus);
          onChange(children[prevFocus]);
          break;
        default:
          setFocus(null);
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
      style: i === focus && focusedStyle ? focusedStyle : null
    })
  );
}

export default List;
