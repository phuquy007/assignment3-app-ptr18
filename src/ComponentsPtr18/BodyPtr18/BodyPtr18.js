import React, {useState, useEffect} from "react";
import { addItemToCart_WS, getCart, getInventory } from "../../ServicesPtr18/ServicePtr18";
import CartTablePtr18 from "../CartTablePtr18/CartTablePtr18";
import InventoryTablePtr18 from "../InventoryTablePtr18/InventoryTablePtr18";

function BodyPtr18(){

    const [inventory, setInventory] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(()=>{
        refreshPage();
    }, []);

    function refreshPage(){
        getInventory()
        .then(json =>{
            setInventory(json);
        }).catch(err=>{
            
        });
        getCart()
        .then(json =>{
            setCart(json);
        }).catch(err=>{

        })
    }

    async function addItemToCart(e){
        await addItemToCart_WS({"sku": e.target.id});
        refreshPage();
    }
    function deleteItemFromCart(e){

    }

    return(
        <div className="row">
            <div className="col-8">
                <InventoryTablePtr18 inventoryItems={inventory} add={addItemToCart} />
                
            </div>
            <div className="col-4">
                <CartTablePtr18 cartItems={cart} delete={deleteItemFromCart} />
            </div>
        </div>
    )
}
export default BodyPtr18;