import React from "react";
import ReactDOM from "react-dom/client";
import { jsx } from "react/jsx-runtime";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import { createBrowserRouter, RouterProvider } from "react-router";

const AppLayout = () => {
  return (
    <div>
      <Header />
      <Body />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    Component: AppLayout, //element: <AppLayout />
    errorElement: <Error />,
  },
  {
    path: "/about",
    Component: About,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
