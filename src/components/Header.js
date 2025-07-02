import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  // console.log("Header Rendered");

  return (
    <div className="header-container">
      <div className="logo">
        <img src={LOGO_URL} alt="logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">AboutUs</Link>
          </li>
          <li>
            <Link to="/contact">ContactUs</Link>
          </li>
          <li>Cart</li>
          <li>
            <button
              className="login-btn"
              onClick={() => {
                // if (btnNameReact === "Login") {
                //   setBtnNameReact("Logout");
                // } else {
                //   setBtnNameReact("Login");
                // }
                btnNameReact === "Login"
                  ? setBtnNameReact("Logout")
                  : setBtnNameReact("Login");
                // console.log(btnNameReact);
              }}
            >
              {btnNameReact}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
