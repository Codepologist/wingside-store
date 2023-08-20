import React from "react";
import { logo } from "../assets";
import { NavLink } from "react-router-dom";
import { ShoppingBag, User } from "phosphor-react";
import { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={`navbar is-spaced is-transparent`}>
      <div className={`navbar-brand`}>
        <NavLink className={`navbar-item`} to="/" onClick={toggleMenu}>
          <img src={logo} />
        </NavLink>
        <a
          role={`button`}
          className={`navbar-burger burger ${menuOpen ? "is-active" : ""}`}
          aria-label={`menu`}
          aria-expanded={`false`}
          data-target={`navbarBasicExample`}
          onClick={toggleMenu}
        >
          <span aria-hidden={`true`}></span>
          <span aria-hidden={`true`}></span>
          <span aria-hidden={`true`}></span>
        </a>
      </div>

      <div
        id={`navbarBasicExample`}
        className={`navbar-menu ${menuOpen ? "is-active" : ""}`}
      >
        <div className={`navbar-start`}>
          <NavLink
            to="/OurMenu"
            className={`navbar-item is-uppercase`}
            onClick={toggleMenu}
          >
            our menu
          </NavLink>
          <a className={`navbar-item is-uppercase`} onClick={toggleMenu}>
            flavors
          </a>
          <a className={`navbar-item is-uppercase`} onClick={toggleMenu}>
            wing club
          </a>
          <a className={`navbar-item is-uppercase`} onClick={toggleMenu}>
            wingside business
          </a>
          <a className={`navbar-item is-uppercase`} onClick={toggleMenu}>
            catering
          </a>
        </div>
        <div className={`navbar-end`}>
          <div className={`navbar-item`}>
            <div className={`buttons`}>
              <NavLink
                className={`button btn is-warning is-rounded`}
                to="/OrderNow"
                onClick={toggleMenu}
              >
                <span className={`icon`}>
                  <ShoppingBag size={17} fontWeight={900} />
                </span>
                <span>Order Now</span>
              </NavLink>
              <a className={`button btn is-rounded is-warning`}>
                <span className={`icon`}>
                  <User size={17} fontWeight={900} />
                </span>
                <span>My Account</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
