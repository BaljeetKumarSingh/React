/*
    here we want to create this nested html structure using react
    <div id: "parent">
        <div id: child1>
            <h1>Hi i am h1 tag</h1>
            <h2>Hi i am h2 tag</h2>
        </div>
        <div id: child2>
            <h1>Hi i am h1 tag</h1>
            <h2>Hi i am h2 tag</h2>
        </div>
    </div>
*/

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "Hi i am h1 tag"),
    React.createElement("h2", {}, "Hi i am h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "Hi i am h1 tag"),
    React.createElement("h2", {}, "Hi i am h2 tag"),
  ]),
]);

console.log(parent); // parent is an object. i.e. React.createElement() returns objects.

/* 
    <div id: "root">
        <div id: "container">
            <input id: "inputBox", paceholder = "Enter the text">
            <button type: "submit">ClickMe</button>
        </div>
    </div>
*/

// const container = React.createElement(
//   "div",
//   { id: "container", className: "container" },
//   [
//     React.createElement("input", {
//       id: "inputBox",
//       className: "inputBox",
//       placeholder: "Enter the text",
//       type: "text",
//     }),
//     React.createElement(
//       "button",
//       { type: "submit", id: "btn", className: "btn" },
//       "ClickMe"
//     ),
//   ]
// );

// const heading = React.createElement(
//     "h1",
//     {id: "heading"},
//     "Hello World from React!"
// );
const root = ReactDOM.createRoot(document.getElementById("root")); // this root is the only place where out entire react is running
root.render(parent); // this render is very powerful it render the parent object and put all those tags in our html code.


/* 
  Note: 
  -React will only work in the place what ever we made the root as(it can work in header only, it can work in footer only , it can work in side bar)
  
  -that's why react is a library(it can work independently on the small portion of our app as well).

  Library Vs Framework:
  -Framework comes with all loads of thing
  -react library is just a piece js code written by facebook developer that working independently on any portion of our app. 
  -at the end of the day react is just js.

  all framework requires you to creating that app using that framework
  but react can work in your existing app as well(using some cdn links).
  
  => React.createElement(
      "tag name",
      {attributes in key: "value" pair},
      children/ react.createElement
      if we have multiple childern we will combine in form of array
      [child1, child2]
  )
  */