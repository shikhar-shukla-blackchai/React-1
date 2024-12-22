import { useState } from "react";
import { LOGO_URL } from "../utils/Constants";

import { Link } from "react-router-dom";

const Header = () => {
  const [btnName, setBtnName] = useState("login");

  console.log("header");

  return (
    <div className="header flex justify-between border ">
      <div className="logo-container">
        <img className="logo w-40" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul className="flex ecimal text-2xl p-4 m-4">
          <li className="p-4">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="p-4">
            <Link to={"/about"}>About Us</Link>
          </li>
          <li className="p-4">
            <Link to={"/contact"}>Contact Us</Link>
          </li>
          <li className="p-4">
            <Link>Cart</Link>
          </li>

          <button
            className="bg-black text-white text-sm px-4 h-6 inline-block align-middle mt-[23] rounded-xl border border-blue-700"
            onClick={() => {
              btnName === "login" ? setBtnName("logout") : setBtnName("login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
