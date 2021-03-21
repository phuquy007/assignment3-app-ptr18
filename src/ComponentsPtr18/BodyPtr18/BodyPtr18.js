import React, { useState, useEffect } from "react";
import {
  addItemToCart_WS,
  getCart,
  getInventory,
  deleteItemFromCart_WS,
  checkout_WS,
} from "../../ServicesPtr18/ServicePtr18";
import CartTablePtr18 from "../CartTablePtr18/CartTablePtr18";
import InventoryTablePtr18 from "../InventoryTablePtr18/InventoryTablePtr18";

function BodyPtr18() {
  const [inventory, setInventory] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    refreshPage();
  }, []);

  function refreshPage() {
    getInventory()
      .then((json) => {
        setInventory(json);
      })
      .catch((err) => {});
    getCart()
      .then((json) => {
        setCart(json);
      })
      .catch((err) => {});
  }

  async function addItemToCart(e) {
    await addItemToCart_WS({ sku: e.target.id });
    refreshPage();
  }
  async function deleteItemFromCart(e) {
    await deleteItemFromCart_WS({ sku: e.target.id });
    refreshPage();
  }

  async function checkout() {
    await checkout_WS();
    refreshPage();
  }

  function calculateTotal() {
    var total = 0;
    cart.forEach((item) => {
      total += parseFloat(item.price) * parseFloat(item.quantity);
    });
    return total.toFixed(2);
  }

  return (
    <div className="row">
      <div className="col-8">
        <InventoryTablePtr18 inventoryItems={inventory} add={addItemToCart} />
      </div>
      <div className="col-4">
        <CartTablePtr18
          cartItems={cart}
          delete={deleteItemFromCart}
          checkout={checkout}
          total={calculateTotal()}
        />
      </div>
    </div>
  );
}
export default BodyPtr18;
