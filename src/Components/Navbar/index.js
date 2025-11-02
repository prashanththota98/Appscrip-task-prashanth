import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { CiHeart, CiSearch } from "react-icons/ci";
import "./index.css";

function Navbar() {
  return (
    <nav className="navbar">
      <section className="nav">
        <div className="navbarLogoMenuContainer">
          <RxHamburgerMenu className="icons-size" />
          <img
            src="https://res.cloudinary.com/dn2qzuhss/image/upload/v1761928907/Logo_ye843g.png"
            alt="website-logo"
            className="website-logo-style"
          />
        </div>
        <h1 className="logoText">LOGO</h1>
        <ul className="navbarIconsGroup">
          <li>
            <CiSearch className="icon" />
          </li>
          <li>
            <CiHeart size={20} />
          </li>
          <li>
            <img
              src="https://res.cloudinary.com/dn2qzuhss/image/upload/v1762056366/shopping-bag_gjkfyy.png"
              alt="cart"
            />
          </li>
          <li className="hideForSmall">
            <img
              src="https://res.cloudinary.com/dn2qzuhss/image/upload/v1762056310/profile_lqy5kr.png"
              alt="profile"
            />
          </li>
          <li className="hideForSmall">
            <select className="languageChange">
              <option>ENG</option>
            </select>
          </li>
        </ul>
      </section>

      <ul className="navLinkAdditional">
        <li className="linkItem">SHOP</li>
        <li className="linkItem">SKILLS</li>
        <li className="linkItem">STORIES</li>
        <li className="linkItem">ABOUT</li>
        <li className="linkItem">CONTACT US</li>
      </ul>
    </nav>
  );
}

export default Navbar;
