import React from "react";
import ReactDOM from "react-dom/client";
import { jsx } from "react/jsx-runtime";

// React.createElement => ReactElement - Js Object => HtmlElement(after rendering)

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Creating a heading using react🚀"
);
console.log(heading);

// JSX (transpile before it reaches js) -PARCEL -Babel

// JSX => Babel transpile it to React.createElement => ReactElement - Js Object => HtmlElement(after rendering)

// React Element written in JSX
const jsxHeading = (
  <h1 id="heading" className="head">
    Namaste React using JSX🚀
  </h1>
);
console.log(jsxHeading);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxHeading);
