import React from "react";
import "./ProductItem.css";
import { useDispatch } from "react-redux";
import { createProduct } from "../../store/productActions"
const ProductItem = (props) => {
  const BASE_URL = "https://63bffa650cc56e5fb0e3afaa.mockapi.io/cart"
  const dispatch = useDispatch()

  const handleCreateProduct = (e) => {
    const item = {
      title: props.title,
      spaceForProduct: props.spaceForProduct,
      price: props.price,
      discount: props.discount,
      image: props.image
    };
    dispatch(
      createProduct({
        url: BASE_URL,
        el: item,
      })
    )
  }

  
  return (
    <div className="product-item">
      <img src={props.image} alt="thumb_product.png" />
      <h2>{props.title}</h2>
      <p>{props.spaceForProduct} </p>
      <div className="p__infor">
        <h2>{props.price} USD</h2>
        <button onClick={(e) =>handleCreateProduct(e)}>Buy now</button>
      </div>
    </div>
  );
};

export default ProductItem;
