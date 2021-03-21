import React from "react";
import InventoryItemPtr18 from "../InventoryItemPtr18/InventoryItemPtr18";

function InventoryTablePtr18(props){
    return(
        <table className="table">
            <thead>
              <tr>
                <th scope="col">SKU</th>
                <th scope="col">Name</th>
                <th scope="col">Quantity</th>
                <th scope="col">Price</th>
                <th scope="col">Add</th>
              </tr>
            </thead>
            <tbody>
              {this.props.inventoryItems.map((inventoryItem, index) =>(
                  <InventoryItemPtr18
                  key={index}
                  sku={inventoryItem.sku}
                  name={inventoryItem.name}
                  quantity={inventoryItem.quantity}
                  price={inventoryItem.price}
                  add={this.props.add} />
              ))}
            </tbody>
          </table>
    )
}

export default InventoryTablePtr18;