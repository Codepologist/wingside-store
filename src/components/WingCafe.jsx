import React from "react";
import { wingscafeproduct } from "../products/wingscafe";

const WingCafe = () => {
  return (
    <React.Fragment>
      <h1 className={`title`}>Wing Cafe</h1>
      <div className={`columns is-multiline is-vcentered`}>
        {wingscafeproduct.map((product) => {
          return (
            <div className={`column`} key={product.id}>
              <div className="card">
                <div className="card-image">
                  <img src={product.productImage} alt="Placeholder image" />
                </div>
                <div className="card-content">
                  <div className="media">
                    <div className="media-content">
                      <p className="title is-4">{product.productName}</p>
                      <p className="subtitle is-6">₦{product.productPrice}</p>
                    </div>
                  </div>
                </div>
                <div className="card-content">
                  <div className="content">
                    <button
                      className={`button is-warning has-text-weight-bold`}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </React.Fragment>
  );
};

export default WingCafe;
