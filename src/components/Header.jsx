import React from "react";
import { logo } from "../assets";
// import { Link } from "react-router-dom";
import {
  HiOutlineHeart,
  HiOutlineMenuAlt3,
  HiOutlineShoppingBag,
  HiOutlineUser,
} from "react-icons/hi";

import { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const untoggleMenu = () => {
    setMenuOpen(false);
  };

  return (
    <section className={`is-relative is-clipped ${menuOpen ? "has-background-light" : ""}`}>
    <nav
      className={`navbar ${menuOpen ? "has-background-light" : ""} is-transparent is-fixed-top`}
      style={{ borderBottom: "1px solid #cfd5e2" }}
    >
      <div className="navbar-brand is-align-items-center">
        <a className="navbar-item is-size-4" href="#">
          <img src={logo} width="auto" className="image" alt="Logo" />
        </a>
        <a
          className={`navbar-burger is-flex-touch is-align-items-center is-justify-content-center ${menuOpen ? "is-active" : ""}`}
          role="button"
          onClick={toggleMenu}
        >
          <HiOutlineMenuAlt3 className={`has-text-dark is-size-3 ${menuOpen ? "is-active" : ""}`} />
        </a>
      </div>
      <div className={`navbar-menu ml-10 is-align-items-center ${menuOpen ? "is-active" : ""}`}>
        <div className="navbar-start" style={{ width: "100%" }}>
          <a className="navbar-item ml-auto" href="#" onClick={untoggleMenu}>
            Category
          </a>
          <a className="navbar-item" href="#" onClick={untoggleMenu}>
            Collection
          </a>
          <a className="navbar-item" href="#" onClick={untoggleMenu}>
            Story
          </a>
          <a className="navbar-item mr-auto" href="#" onClick={untoggleMenu}>
            Brand
          </a>
        </div>
        <div className={`navbar-end ${menuOpen ? "is-flex-mobile" : ""}`}>
          <a className={`navbar-item ${menuOpen ? "is-flex" : ""}`} href="#">
            <HiOutlineHeart className="is-size-4" />
          </a>
          <a className={`navbar-item ${menuOpen ? "is-flex is-align-items-center" : ""}`} href="#">
            <HiOutlineShoppingBag className="is-size-4" />
            <span
              className="is-inline-flex is-align-items-center is-justify-content-center has-background-white has-text-weight-bold"
              style={{
                width: "24px",
                height: "24px",
                borderRadius: "50%",
              }}
            >
              3
            </span>
          </a>
          <a
            className={`navbar-item pr-10 ${menuOpen ? "is-flex is-align-items-center is-align-self-stretch" : ""} has-text-weight-bold`}
            href="#"
          >
            <HiOutlineUser className={`mr-3 is-size-4 ${menuOpen ? "is-flex" : ""}`} />
            <span>Sign In</span>
          </a>
        </div>
      </div>
    </nav>
  </section>
  );
};

export default Header;
