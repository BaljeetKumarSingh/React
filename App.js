import React from "react";
import ReactDOM from "react-dom/client";
import { jsx } from "react/jsx-runtime";

//React Component
// 1. Class Based Component
// 2. Functional Component

// React Functional Component - it's js function that return a piece of JSX or react element

const Title = () => (
  <h1 id="heading" className="head">
    Namaste React Functional Component🚀
  </h1>
);

// Component Composition - nesting one component inside another

// we can nest react element inside react functional component and vice versa

const HeadingComponent = () => (
  <div id="container">
    {Title()}  {/*this Title function is js and we write js in curly braces{}} */}
    {/*similarly when we nest react element inside Functional component we write it in curly braces{} b/c at the end of the day it is also a js object */}
    <Title/>
    <Title></Title>  {/*this is another way to nest one component inside another*/}
    <h1 className="heading">Practicing Component Composition</h1>
  </div>
);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
