import { LOGO_URL } from "../utils/Constants";

const Header = () => (
  <div className="header flex justify-between border ">
    <div className="logo-container">
      <img className="logo w-40" src={LOGO_URL} />
    </div>
    <div className="nav-items">
      <ul className="flex ecimal text-2xl p-4 m-4">
        <li className="p-4">Home</li>
        <li className="p-4">About Us</li>
        <li className="p-4">Contact Us</li>
        <li className="p-4">Cart</li>
      </ul>
    </div>
  </div>
);

export default Header;
