import React from "react";

function InventoryItemPtr18(props){
    return(
        <tr>
            <td>{props.sku}</td>
            <td>{props.name}</td>
            <td>{props.quantity}</td>
            <td>{props.price}</td>
            <td><button id={props.id} onClick={props.add} className="btn btn-primary">Add</button></td>
        </tr>
    )
}
export default InventoryItemPtr18;