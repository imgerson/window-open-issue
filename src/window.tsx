import React from "react";
import ReactDOM from "react-dom";

const WindowComponent = ({
  children,
  newWindow,
  setNewWindow,
  className = "root-portal",
  el = "div"
}) => {
  // const [container] = React.useState(() => {
  //   // This will be executed only on the initial render
  //   // https://reactjs.org/docs/hooks-reference.html#lazy-initial-state
  //   return document.createElement(el);
  // });

  // const [newWindow] = React.useState(() => {
  //   // This will be executed only on the initial render
  //   // https://reactjs.org/docs/hooks-reference.html#lazy-initial-state
  //   return window.open("", "", "width=1200,height=400,popup=1");
  // });

  // React.useEffect(() => {
  //   if (!newWindow) return;

  //   newWindow.document.body.appendChild(container);

  //   return () => {
  //     newWindow.document.body.removeChild(container);
  //   };
  // }, []);

  React.useEffect(() => {
    const newWindowInst = window.open("", "", "width=1200,height=400,popup=1");

    setNewWindow(newWindowInst);
  }, []);

  if (!newWindow) return null;

  return ReactDOM.createPortal(children, newWindow.document.body);
};

export default WindowComponent;
