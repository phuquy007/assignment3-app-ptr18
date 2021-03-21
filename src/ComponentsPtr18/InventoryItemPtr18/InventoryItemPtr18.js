import React from "react";

function InventoryItemPtr18(props){
    return(
        <tr>
            <td>{props.sku}</td>
            <td>{props.name}</td>
            <td>{props.quantity}</td>
            <td>${props.price}</td>
            <td><button id={props.sku} onClick={props.add} className={(props.quantity >0)?"btn btn-primary": "btn btn-secondary"} >{(props.quantity>0)?"Add":"Out of Stock"}</button></td>
        </tr>
    )
}
export default InventoryItemPtr18;