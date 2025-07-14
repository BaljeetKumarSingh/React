import { useState, useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  // console.log("Header Rendered");
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);

  return (
    <div className="flex justify-between items-center px-4 shadow-lg">
      <div>
        <img className="w-28" src={LOGO_URL} alt="logo" />
      </div>
      <div>
        <ul className="flex gap-4">
          <li>Online Status: {onlineStatus ? "✅" : "🔴"}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">AboutUs</Link>
          </li>
          <li>
            <Link to="/contact">ContactUs</Link>
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
          <li>Cart</li>
          <li>
            <button
              className="shadow-lg bg-blue-500 text-white px-3 py-1 rounded-lg"
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
          <li className="font-bold text-md">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
