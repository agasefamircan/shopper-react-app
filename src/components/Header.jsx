import React from "react";
import { useState } from "react";
import {
  FaHeart,
  FaSearch,
  FaUser,
  FaShoppingCart,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import "../asset/Header.css";
const Header = () => {
  const [nav, setNav] = useState(false);
  return (
    <div className="header md:block">
      <Header className="flex justify-between pt-6 pb-6">
        <div className="logo">
          <a href="/home" className="text-3xl">
            SHOPPER
          </a>
        </div>
        <button className="hidden closes" onClick={()=> setNav(!nav)}>
          {nav ? <FaBars /> : <FaTimes/>}
        </button>

        <ul className={`navLinks flex ${nav ? "block,pt-2,pb-3,ml-10" : "hidden"}`}>
          <a href="/home">
            <li>Home</li>
          </a>
          <a href="/product">
            <li>Catalog</li>
          </a>
          <a href="/shop">
            <li>Shop</li>
          </a>
          <a href="/about">
            <li>About</li>
          </a>
          <a href="contactUs">
            <li>Contact Us</li>
          </a>
          <a href="/faq">
            <li>FAQ</li>
          </a>
        </ul>
        <div className="icons flex">
          <FaSearch className="" />
          <FaUser className="" />
          <FaHeart className="" />
          <FaShoppingCart className="" />
        </div>
      </Header>
    </div>
  );
};

export default Header;
