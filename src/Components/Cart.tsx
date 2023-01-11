import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { cartContext } from "../App";
export const Cart = () => {
  let cartData: any = useContext(cartContext)
  const navigate = useNavigate();
  const [price, setPrice] = useState(0)
  let totalprice = 0;
  // Getting item from local storage
  let userlogdata: any = localStorage.getItem("data");
  let userlogdata1 = JSON.parse(userlogdata);
  useEffect(() => {
    // Adding totalprice here
    for (let i = 0; i < cartData.cart.length; i++) {
      totalprice +=
        cartData.cart[i].quantity * cartData.cart[i].price;
      setPrice(totalprice);

    }
  }, [cartData.cart]);
  // increase Button Functionaliy
  const IncreaseHandler = (val: any) => {
    for (let i = 0; i < cartData.cart.length; i++) {
      if (val === cartData.cart[i]._id) {
        cartData.cart[i].quantity += 1;
        cartData.setCart([...cartData.cart]);
      }
    }
  };
  // decrese button functinality
  const DecreseHandler = (val: any) => {
    for (let i = 0; i < cartData.cart.length; i++) {
      if (val === cartData.cart[i]._id) {
        if (cartData.cart[i].quantity <= 1) {
          alert("Warning ! your product will delete from cart");
          cartData.cart.splice(i, 1);
          cartData.setCart([...cartData.cart]);
        } else {
          cartData.cart[i].quantity -= 1;
          cartData.setCart([...cartData.cart]);
        }
      }
    }
  };
  // delete cart item
  const deleteHandler = (val: any) => {
    for (let i = 0; i < cartData.cart.length; i++) {
      let confirm = window.confirm("Product will delete..")
      if (confirm) {
        if (val === cartData.cart[i]._id) {
          cartData.cart.splice(i, 1)
          cartData.setCart([...cartData.cart]);
        }
      }

    }
  }
  // BUy button function
  const BuyButtonHandler = () => {
    if (userlogdata1 === null) {
      alert("Plese SignUp first..");
      navigate("/SignIn");
    } else if (userlogdata1.length === 1) {
      alert("Order Placed");
      window.location.reload()
      navigate("/");
    }
  }
  // back to home page
  const BackButtonHandler = () => {
    navigate('/')
  }
  return (
    <div style={{ textAlign: "center" }}>
      {cartData.cart.length !== 0 ? <div><table style={{ border: "solid #0dcaf0 2px" }}>
        <thead>
          <tr><th>Item</th><th>Price</th>
            <th>quantity</th>
            <th>Action</th></tr>
        </thead>
        <tbody>
          {cartData.cart.map((val: any) =>
            <tr key={Math.random()}>
              <td>{val.title}</td>
              <td>₹{val.price}</td>
              <td style={{ fontSize: "2vw" }}>
                <button onClick={() => IncreaseHandler(val._id)} className="btn btn-info">+</button>{val.quantity}<button className="btn btn-info" onClick={() => DecreseHandler(val._id)}>-</button></td>
              <td onClick={() => deleteHandler(val._id)}><i className="material-icons" style={{ fontSize: "58px", color: "red" }}>delete</i></td></tr>)}
        </tbody>
      </table>
        <p style={{ textAlign: "center", fontSize: "1.5vw" }}>Total Price : ₹{price}</p>
        <button onClick={BuyButtonHandler} className="btn btn-info">Buy Now</button>
      </div> :
        <div className="EmptyCart" style={{ fontSize: "2vw" }}>
          <p>Your Cart is empty</p>
        </div>}
      <button onClick={BackButtonHandler} className="btn btn-info mt-4"> Back </button>
    </div>
  )
}
