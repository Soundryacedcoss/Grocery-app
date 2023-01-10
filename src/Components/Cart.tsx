import React, { useContext } from "react";
import { cartContext } from "../App";
export const Cart = () => {
  let cartData: any = useContext(cartContext)
  return (
    <div>
      <table style={{border:"solid black 2px"}}>
        {cartData.cart.map((val: any) =><tr><td>{val.title}</td>{val.price}</tr>)}
      </table>

    </div>
  )
}
