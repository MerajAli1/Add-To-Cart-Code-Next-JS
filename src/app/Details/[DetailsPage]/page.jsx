"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";

const DetailsPage = ({ params }) => {
  const [product, setProduct] = useState([]);
  const [cart, setCart] = useState([]);
  console.log(params.DetailsPage);
  const productDetails = async () => {
    try {
      const res = await axios.get(
        `https://fakestoreapi.com/products/${params.DetailsPage}`
      );
      console.log(res.data);
      setProduct(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  const addToCart = (product) => {
    const cartData = JSON.parse(localStorage.getItem("cart")) || [];
    const newCart = [...cartData, product];
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
};
  useEffect(() => {
    productDetails();
  }, []);
  return (
    <div>
      <h1>{product.title}</h1>
      <img width={"10%"} src={product.image} alt={product.title} />
      <p>{product.description}</p>
      <p>{product.price}</p>
      <button onClick={() => addToCart(product)}>Add to cart</button>
    </div>
  );
};

export default DetailsPage;
