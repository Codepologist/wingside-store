import React from "react";
import useStore from "../zustand/store";
import { ShoppingBag, User } from "phosphor-react";
import { Link } from "react-router-dom";

const Breadcrumb = () => {
  const currentState = useStore((state) => state.products.length);
  //console.log(getCartTotal);
  return (
    <div className={`columns`}>
      <div className={`column`}></div>
      <div className={`column is-one-fifth`}>
        <nav className={`breadcrumb is-right`} aria-label="breadcrumbs">
          <ul>
            <li>
              <span className={`icon is-medium`}>
                <User size={20} fontWeight={900} />
              </span>
            </li>
            <li>
              <Link to="/Cart">
                <span className={"icon-text"}>
                  <span className={`icon is-medium`}>
                    <ShoppingBag size={20} fontWeight={900} />
                  </span>
                  <span className={`tag is-rounded has-background-warning`}>
                    {currentState}
                  </span>
                </span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Breadcrumb;
