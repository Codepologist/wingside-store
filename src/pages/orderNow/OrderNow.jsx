import React from "react";
import { Link, Outlet } from "react-router-dom";
import { Helmet } from "react-helmet";
import {
  GiSandwich,
  TbMilk,
  GiChickenOven,
  GrCafeteria,
  BiDish,
  BiSearch,
  GiPartyHat,
  IoFastFood,
  FaLeaf,
} from "react-icons/all";

const OrderNow = () => {
  return (
    <section className={`section`}>
      <Helmet>
        <title>Order - Wingside®</title>
      </Helmet>
      <div className={`container`}>
        <div className={`columns`}>
          <div className={`column is-3`}>
            <article className={`panel is-warning`}>
              <p className="panel-heading">Categories</p>

              <Link className="panel-block" to="/OrderNow">
                <span className="panel-icon">
                  <GiChickenOven />
                </span>
                Wings
              </Link>
              <Link className="panel-block" to="/OrderNow/Sides">
                <span className="panel-icon">
                  <BiDish />
                </span>
                Sides
              </Link>
              <Link className="panel-block" to="/OrderNow/Sandwiches">
                <span className="panel-icon">
                  <GiSandwich />
                </span>
                Sandwiches
              </Link>
              <Link className="panel-block" to="/OrderNow/Wraps">
                <span className="panel-icon">
                  <IoFastFood />
                </span>
                Wraps
              </Link>
              <Link className="panel-block" to="/OrderNow/Salads">
                <span className="panel-icon">
                  <FaLeaf />
                </span>
                Salads
              </Link>
              <Link className="panel-block" to="/OrderNow/Milkshakes">
                <span className="panel-icon">
                  <TbMilk />
                </span>
                Milkshakes
              </Link>
              <Link className="panel-block" to="/OrderNow/WingCafe">
                <span className="panel-icon">
                  <GrCafeteria />
                </span>
                Wing Café
              </Link>
              <Link className="panel-block" to="/OrderNow/WingsideSpecial">
                <span className="panel-icon">
                  <GiPartyHat />
                </span>
                Wingside Special
              </Link>
            </article>
          </div>
          <div className={`column`}>
            <Outlet />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderNow;
