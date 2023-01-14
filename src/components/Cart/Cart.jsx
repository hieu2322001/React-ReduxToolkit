import React from "react";
import BillInfo from "../BillInfo/BillInfo";
import ListItemCart from "../ListItemCart/ListItemCart";
import "./Cart.css";

const Cart = () => {
  return (
    <div className="cart-container">
      <BillInfo />
      <ListItemCart />
    </div>
  );
};

export default Cart;
