import React from "react";
import ReactDOM from "react-dom/client";
import { jsx } from "react/jsx-runtime";

//React Component
// 1. Class Based Component
// 2. Functional Component

// React Functional Component
const Title = () => (
  <h1 id="heading" className="head">
    Namaste React Functional Component🚀
  </h1>
);

// Component Composition - nesting one component inside another

const HeadingComponent = () => (
  <div id="container">
    <Title/>
    <h1 className="heading">Practicing Component Composition</h1>
  </div>
);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
