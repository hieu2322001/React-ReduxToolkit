import React from "react";
import "./CartItem.css";
import { useDispatch } from "react-redux";
import { deleteProduct } from "../../store/productActions";

const CartItem = (props) => {

  const BASE_URL = "https://63bffa650cc56e5fb0e3afaa.mockapi.io/cart"
  const dispatch = useDispatch()
  const handleDeleteProduct = (id) => {
    dispatch(
      deleteProduct({
        url: BASE_URL,
        id: id,
      })
    )
  }

  return (
    <div className="CartItem_container">
      <div className="cart-item">
        <img src={props.image} alt="thumb_cart_item.png" />
        <div className="cart-product-item-infor">
          <h3>{props.title}</h3>
          <div>
            <span>Farm:</span>
            <p>Tharamis Farm</p>
          </div>
          <div>
            <span>Freshness:</span>
            <p>1 day old</p>
          </div>
        </div>
      </div>

      <div className="cart-item">
        <div className="cart-bonous-item">
          <div>
            <img src="/icons/wishlist.svg" alt="wishlist" />
            <span>Wishlist</span>
          </div>
          <div>
            <img src="/icons/compare.svg" alt="compare" />
            <span>Compare</span>
          </div>
          <div>
            <img src="/icons/remove.svg" alt="compare" />
            <span onClick={(id) => handleDeleteProduct(props.id)}>Remove</span>
          </div>
        </div>
        <div className="c-product-price-container">
          <img src="/icons/rate-review.svg" alt="rate-review" />
          <div className="cart-product-price">
            <div className="c-product-price">
              <h2>{props.price}</h2>
              <h3>{props.discount}</h3>
            </div>
            <div className="c-product-unit">
              <input type="text" placeholder="1pcs" />
              <div>
                Pcs{" "}
                <img src="/icons/down_green_arrow.svg" alt="down_green_arrow" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
