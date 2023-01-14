import React, { useEffect } from "react";
import CartItem from "../CartItem/CartItem";
import "./ListItemCart.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../../store/productActions";

const ListItemCart = () => {

  const BASE_URL = "https://63bffa650cc56e5fb0e3afaa.mockapi.io/cart"
  const dispatch = useDispatch()
  const listCart = useSelector((state) => state.product)

  const fetchProductCart = async () => {
    dispatch(fetchProduct(BASE_URL))
  };

  const totalOrder = listCart.reduce(function(acc, cur) {
    if(cur.price!=0) {
      return acc + cur.price;
    }
    return acc;
  },0)
  useEffect(() => {
    fetchProductCart()
  }, [])
  return (
    <div className="m-list-cart-container">
      <h1>Order Summary</h1>
      <p>
        Price can change depending on shipping method and taxes of your state.
      </p>

      <div className="cart-item-container">
        {listCart.map((item, index) => (
          <CartItem
            title={item.title}
            spaceForProduct={item.spaceForProduct}
            price={item.price}
            discount={item.discount}
            image={item.image}
            id={item.id}
            key={index}
          />
        ))}

      </div>

      <div className="cart-billing-container">
        <div className="cart-subtal">
          <div>
            <p>Subtotal</p>
            <p>73.98 USD</p>
          </div>
          <div>
            <p>Tax</p>
            <p>17% 16.53 USD</p>
          </div>

          <div>
            <p>Shipping</p>
            <p>0 USD</p>
          </div>
        </div>
        <div className="cart-apply-code">
          <input type="text" placeholder="Apply promo code" />
          <img src="/icons/Apply _now.svg" alt="Apply _now" />
        </div>

        <div className="cart-total-order">
          <div>
            <h3>Total Order</h3>
            <p>Guaranteed delivery day: June 12, 2020</p>
          </div>
          <h1> {totalOrder}USD</h1>
        </div>
      </div>
    </div>
  );
};

export default ListItemCart;
