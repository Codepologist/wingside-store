import React from "react";
import { wings } from "../products/wings";
// import useStore from "../redux/store";

const Wings = () => {
  const addToCart = useStore((state) => state.addToCart);

  return (
    <React.Fragment>
      <h1 className={`title`}>Wings</h1>
      <div className={`columns is-vcentered`}>
        {wings.map((product) => {
          return (
            <div className={`column`} key={product.id}>
              <div className={`card`}>
                <div className={`card-image`}>
                  <figure className={`image is-128x128`}>
                    <img src={product.productImage} alt="Placeholder image" />
                  </figure>
                </div>
                <div className={`card-content`}>
                  <div className={`media`}>
                    <div className={`media-content`}>
                      <p className={`is-size-5`}>{product.productName}</p>

                      <p className={`is-size-6`}>₦{product.productPrice}</p>
                    </div>
                  </div>
                </div>
                <div className={`card-content`}>
                  <div className={`content`}>
                    <button
                      onClick={() => addToCart(product)}
                      className={`button is-small is-responsive is-warning has-text-weight-semibold`}
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

export default Wings;
