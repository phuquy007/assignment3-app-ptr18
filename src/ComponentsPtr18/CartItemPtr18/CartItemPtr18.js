import React from "react";

function CartItemPtr18(props){
    return(
        <tr>
            <td>{props.name}</td>
            <td>{props.quantity}</td>
            <td>{props.price}</td>
            <td><button id={props.id} onClick={props.delete} className="btn btn-danger">Delete</button></td>
        </tr>
    )
}
export default CartItemPtr18;