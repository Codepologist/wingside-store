import React from "react";
import { ShoppingCart, Trash } from "phosphor-react";
import { Link } from "react-router-dom";
import useStore from "../zustand/store";

const Cart = () => {
  const products = useStore((state) => state.products);
  const increaseQuantity = useStore((state) => state.increaseQuantity);
  const decreaseQuantity = useStore((state) => state.decreaseQuantity);
  const removeFromCart = useStore((state) => state.removeFromCart);
  const getCartTotal = useStore((state) => state.getCartTotal);

  return (
    <section className={`section`}>
      <div className={`container`}>
        <div className={`table-container`}>
          <table className={`table is-striped is-fullwidth`}>
            <thead>
              <tr>
                <th className={``}>
                  <abbr title="Position">Item</abbr>
                </th>
                <th className={`has-text-centered`}>
                  <abbr title="Price">Price</abbr>
                </th>
                <th className={`has-text-centered`}>
                  <abbr title="Quantity">Quantity</abbr>
                </th>
                <th className={`has-text-centered`}>
                  <abbr title="Total">Total</abbr>
                </th>
                <th className={`has-text-centered`}>
                  <abbr title="Remove">Remove</abbr>
                </th>
              </tr>
            </thead>
            <tfoot>
              <tr>
                <th className={``}>
                  <abbr title="Position">Item</abbr>
                </th>
                <th className={`has-text-centered`}>
                  <abbr title="Price">Price</abbr>
                </th>
                <th className={`has-text-centered`}>
                  <abbr title="Quantity">Quantity</abbr>
                </th>
                <th className={`has-text-centered`}>
                  <abbr title="Total">Total</abbr>
                </th>
                <th className={`has-text-centered`}>
                  <abbr title="Remove">Remove</abbr>
                </th>
              </tr>
            </tfoot>
            <tbody>
              {products.map((product) => {
                return (
                  <tr key={product.id}>
                    <td>
                      <figure className={`image is-96x96`}>
                        <img src={product.productImage} />
                      </figure>
                    </td>
                    <td className={`has-text-centered`}>
                      $ {product.productPrice}
                    </td>
                    <td>
                      <div className={`buttons has-addons is-centered`}>
                        <button
                          onClick={() => decreaseQuantity(product.id)}
                          className={`button is-small`}
                        >
                          -
                        </button>
                        <button className={`button is-static is-small`}>
                          <strong>{product.quantity}</strong>
                        </button>
                        <button
                          onClick={() => increaseQuantity(product.id)}
                          className={`button is-small`}
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <td className={`has-text-centered`}>
                      {product.getCartTotal}
                    </td>
                    <td className={`has-text-centered`}>
                      <a onClick={() => removeFromCart(product.id)}>
                        <Trash />
                      </a>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className={`has-text-centered`}>
          <ShoppingCart size={200} fontWeight={900} />

          <p className={`title has-text-warning has-text-weight-semibold`}>
            Your Cart is empty
          </p>
          <p className={`subtitle`}>Proceed to store and start shopping</p>
          <Link
            to="/OrderNow"
            className={`button is-warning has-text-weight-semibold`}
          >
            Order Now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Cart;
