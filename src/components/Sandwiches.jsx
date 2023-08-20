import React from "react";
import { sandwichesproduct } from "../products/sandwiches";

const Sandwiches = () => {
  return (
    <React.Fragment>
      <h1 className={`title`}>Sandwiches</h1>
      <div className={`columns is-multiline is-vcentered`}>
        {sandwichesproduct.map((product) => {
          return (
            <div className={`column`} key={product.id}>
              <div className="card">
                <div className="card-image">
                  <figure className="image is-4by3">
                    <img src={product.productImage} alt="Placeholder image" />
                  </figure>
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

export default Sandwiches;
