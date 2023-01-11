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
            <div className='card flex-row flex-wrap justify-content-around' >
                {data.map((item) =>
                    <div className=' w-25 m-4 Products' key={Math.random() * 10}>
                        <img src={item.images[0]} className='w-100 h-50' alt="" />
                        <p style={{ fontSize: "1.5vw", height: "100px", padding: "2%" }}>{item.title}</p>
                        <p style={{ fontSize: "1.5vw", height: "50px", marginLeft: "34%" }}>₹{item.price}</p>
                        <button className="btn btn-primary" value={item._id} onClick={AddToCartHandler} style={{ width: "8rem", marginLeft: "25%" }}>Add to cart</button>
                    </div>)}
            </div>
        </>
    )
}
