import { useState, useContext } from "react";
import { LOGO_URL } from "../utils/Constants";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setBtnName] = useState("login");

  const onlineStatus = useOnlineStatus();

  const { loggedInUser } = useContext(UserContext);

  const cartItems = useSelector((store) => store.cart.items);
  console.log("cartItems", cartItems);

  return (
    <div className="header flex justify-between border bg-black   text-white border-black">
      <div className="logo-container">
        <img className="logo w-44 " src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul className="flex ecimal text-2xl p-4 m-9">
          <li className="align-middle mt-4">
            Online Status:{onlineStatus ? "🟢" : "🔴"}
          </li>
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
            <Link to={"/cart"}>Cart ({cartItems.length})</Link>
          </li>
          <li className="p-4">
            <Link to={"/grocery"}>Grocery</Link>
          </li>

          <button
            className="bg-black text-white text-sm px-4 h-6 inline-block align-middle mt-[23] rounded-xl border border-blue-700"
            onClick={() => {
              btnName === "login" ? setBtnName("logout") : setBtnName("login");
            }}
          >
            {btnName}
          </button>
          <li className="p-4 text-base mt-2">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
