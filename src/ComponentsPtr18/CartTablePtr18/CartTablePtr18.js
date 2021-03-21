import React from "react";
import CartItemPtr18 from "../CartItemPtr18/CartItemPtr18";

function CartTablePtr18(props){
    return(
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
              {props.cartItems.map((cartItem, index) =>(
                  <CartItemPtr18
                  key={index}
                  name={cartItem.name}
                  quantity={cartItem.quantity}
                  price={cartItem.price}
                  delete={props.delete} />
              ))}
            </tbody>
          </table>
    )
}

export default CartTablePtr18;