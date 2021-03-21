import React from "react";
import CartItemPtr18 from "../CartItemPtr18/CartItemPtr18";

function CartTablePtr18(props) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Item</th>
          <th scope="col">Quantity</th>
          <th scope="col">Price</th>
          <th scope="col">Delete</th>
        </tr>
      </thead>
      <tbody>
        {props.cartItems.map((cartItem, index) => (
          <CartItemPtr18
            key={index}
            sku={cartItem.sku}
            name={cartItem.name}
            quantity={cartItem.quantity}
            price={cartItem.price}
            delete={props.delete}
          />
        ))}
        <tr>
          <td>
            <button onClick={props.checkout} className="btn btn-primary">
              Checkout
            </button>
          </td>
          <td></td>
          <td></td>
          <td>
            <h3>${props.total}</h3>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default CartTablePtr18;
