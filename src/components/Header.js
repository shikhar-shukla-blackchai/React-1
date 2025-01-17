import { useState, useContext } from "react";
import { LOGO_URL } from "../utils/Constants";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  const onlineStatus = useOnlineStatus();

  const { loggedInUser } = useContext(UserContext);

  const cartItems = useSelector((store) => store.cart.items);

  return (
    <header className="bg-black text-white border-b border-gray-700 sticky top-0 z-50 h-[5.5rem]">
      <div className="container mx-auto flex justify-between items-center py-4 ">
        <Link to="/">
          <img
            src={LOGO_URL}
            alt="Swiggy Logo"
            className="h-20 left-10 top-1 absolute w-28"
          />
        </Link>
        <nav className="flex space-x-4">
          <Link to="/" className="hover:text-gray-200">
            Home
          </Link>
          <Link to="/about" className="hover:text-gray-200">
            About Us
          </Link>
          <Link to="/contact" className="hover:text-gray-200">
            Contact Us
          </Link>
          <Link to="/cart" className="relative hover:text-gray-200">
            Cart
            {cartItems.length > 0 && (
              <span className="absolute top-0 right-0 bg-red-500 text-xs font-bold rounded-full w-4 h-4 flex items-center justify-center text-white">
                {cartItems.length}
              </span>
            )}
          </Link>
          <Link to="/grocery" className="hover:text-gray-200">
            Grocery
          </Link>

          {loggedInUser && <span className=" ml-2">{loggedInUser}</span>}
          <button
            className="bg-orange-500 hover:bg-orange-600 text-white  px-2 py-1 rounded-md -mt-2"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
