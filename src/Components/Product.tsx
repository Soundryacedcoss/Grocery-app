import React, { useContext } from "react";
import data from '../Components/data'
import { cartContext } from "../App";
export const Product = () => {
    // using usecontext here 
    let cartData: any = useContext(cartContext)
    // Add to cart button functinality
    const AddToCartHandler = (e: any) => {
        for (let i = 0; i < data.length; i++) {
            // if id same then add product into cart
            if (e.target.value === data[i]._id) {
                if (data[i].quantity === 0) {
                    alert("Product added to cart");
                    data[i].quantity += 1;
                    cartData.cart.push(data[i]);
                    cartData.setCart([...cartData.cart]);
                } else if (data[i].quantity > 0) {
                    // If not same then increase quantity
                    alert("Product added to cart");
                    data[i].quantity += 1;
                    cartData.setCart([...cartData.cart]);
                }
            }
        }
    }
    return (
        <>
            <div style={{ display: "flex", flexWrap: "wrap", marginLeft: "4%" }}>
                {data.map((item) =>
                    <div className="Card Products" style={{ width: "18rem", margin: "1%", justifyItems: "center" }}>
                        <img src={item.images[0]} className="card-img-top w-100 h-75" alt="..." />
                        <p style={{ height: "30px", marginLeft: "2%" }}>{item.title}</p>
                        <h3 style={{ height: "30px", marginLeft: "30%" }}>₹{item.price}</h3>
                        <button className="btn btn-primary"
                            value={item._id} style={{ marginLeft: "28%" }} onClick={AddToCartHandler} >Add to cart</button>
                    </div>
                )}
            </div>
        </>
    )
}
