import { useState } from "react";
import { logo } from "../assets";
import { Link } from "react-router-dom";
import {
  HiOutlineHeart,
  HiMenuAlt3,
  HiOutlineShoppingBag,
  HiOutlineUser,
} from "react-icons/hi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const untoggleMenu = () => {
    setMenuOpen(false);
  };

  return (
    <section className="is-relative is-clipped has-background-light">
<<<<<<< HEAD
=======
      {menuOpen && (
        <div
          className="navbar-backdrop"
          onClick={untoggleMenu}
          style={{
            position: "fixed",
            top: "19.5rem",
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 98,
           
              // Adjust the zIndex to be below the menu (e.g., 98)
          }}
        />
      )}
>>>>>>> d9311b7fdf5bf6a7de4b28a015f6321d4e4925f2
      <nav
        className="navbar has-background-light is-transparent is-fixed-top"
        style={{
          borderBottom: "1px solid #cfd5e2",
        }}
      >
        <div className="navbar-brand is-align-items-center">
          <a className="navbar-item" href="#" onClick={untoggleMenu}>
            <img src={logo} alt="Logo" />
          </a>
          <a
            className="navbar-item button is-ghost is-no-focus-outline is-hidden-desktop"
            href="#"
            style={{ marginLeft: "30%" }}
            onClick={untoggleMenu}
          >
            <span className="icon">
              <HiOutlineHeart className="is-size-4" />
            </span>
          </a>
          <a
            className="navbar-item button is-ghost is-no-focus-outline is-hidden-desktop"
            href="#"
            onClick={untoggleMenu}
          >
            <HiOutlineShoppingBag className="is-size-4" />
            <span
              className="has-background-warning has-text-weight-semibold"
              style={{
                width: "24px",
                height: "24px",
                borderRadius: "50%",
              }}
            >
              3
            </span>
          </a>

          <button
            role="button"
            className={`navbar-burger ${menuOpen ? "i-active" : ""}`}
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarMenuH"
            onClick={toggleMenu}
          >
            <HiMenuAlt3 className="is-size-4 mr-0" />
          </button>
        </div>
        <div
          id="navbarMenuH"
          className={`navbar-menu ${menuOpen ? "is-active" : ""}`}
        >
          <div className="navbar-end">
            <Link
              className="navbar-item mobile-menu is-size-6 has-text-weight-semibold"
              to="/"
              onClick={untoggleMenu}
            >
              Home
            </Link>
            <div className="navbar-item has-dropdown is-hoverable mobile-menu is-size-6 has-text-weight-semibold">
              <a class="navbar-link ">Other Links</a>
              <div className="navbar-dropdown">
                <a className="navbar-item">Our Menu</a>
                <a className="navbar-item">Flavors</a>
                <a className="navbar-item">Catering</a>
                <a className="navbar-item">Wing Club</a>
                <hr className="navbar-divider" />
                <div className="navbar-item">Wingside Business</div>
              </div>
            </div>
            <Link
              className="navbar-item mobile-menu is-size-6 has-text-weight-semibold"
              to="/contact"
              onClick={untoggleMenu}
            >
              Contact Us
            </Link>
            <hr className="navbar-divider is-hidden-desktop" />
            <Link
              className="navbar-item mobile-menu is-hidden-desktop is-size-6 has-text-weight-semibold"
              to="/login"
              onClick={untoggleMenu}
            >
              Login
            </Link>
            <Link
              className="navbar-item mobile-menu is-hidden-desktop is-size-6 has-text-weight-semibold "
              to="/register"
              onClick={untoggleMenu}
            >
              Register
            </Link>
            <a
              className="navbar-item mobile-menu is-hidden-desktop is-size-6 has-text-weight-semibold"
              href="#"
              onClick={untoggleMenu}
            >
              My Orders
            </a>
          </div>
          <div className="navbar-end is-hidden-mobile is-hidden-tablet-only">
            <div className="navbar-item">
              <div className="field is-grouped">
                <p className="control">
                  <Link
                    className="button is-ghost is-no-focus-outline is-size-6 has-text-weight-semibold"
                    to="/login"
                  >
                    Login
                  </Link>
                </p>
                <p className="control">
                  <Link
                    className="button is-ghost is-no-focus-outline is-size-6 has-text-weight-semibold"
                    to="/register"
                  >
                    Register
                  </Link>
                </p>
                <p className="control">
                  <a
                    className="button is-ghost is-no-focus-outline is-size-6 has-text-weight-semibold"
                    href="#"
                  >
                    My Orders
                  </a>
                </p>
                <p className="control">
                  <a
                    className="button is-ghost is-no-focus-outline is-size-6 has-text-weight-semibold"
                    href="#"
                  >
                    Cart
                    <HiOutlineShoppingBag className="is-size-4" />
                    <span
                      className="has-background-warning has-text-weight-semibold"
                      style={{
                        width: "24px",
                        height: "24px",
                        borderRadius: "50%",
                      }}
                    >
                      3
                    </span>
                  </a>
                </p>
                {/* <p className="control">
                  <a className="button is-ghost is-no-focus-outline" href="#">
                    <span className="icon-text">
                      <span className="icon">
                        <HiOutlineUser className="is-size-4" />
                      </span>
                      <span>Sign In</span>
                    </span>
                  </a>
                </p> */}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
