"use client";
import axios from "axios";
import Link from "next/link";
import React, { use, useEffect, useState } from "react";

const ProductCard = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const getProducts = async () => {
    const res = await axios.get("https://fakestoreapi.com/products/");
    console.log(res.data);
    setProducts(res.data);
  };

  useEffect(() => {
    getProducts();

    //Local Storage
    const savedProduct = localStorage.getItem("cart");
    if (savedProduct) {
      setCart(JSON.parse(savedProduct));
    }
  }, []);

  const addToCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  const toggleCart = () => {
    setShowCart((prev) => !prev);
  };

  const removeCart = () => {
    setCart([]);
    localStorage.removeItem("cart");
  };
  return (
    <>
      <div>
        <button onClick={() => toggleCart()}>Cart {cart.length}</button>
      </div>
      <div>
        {showCart &&
          cart.map((e, i) => {
            return (
              <div key={i} style={{ backgroundColor: "grey" }}>
                <h1>{e.title}</h1>
                <img width={"10%"} src={e.image} alt={e.title} />
                <p>{e.description}</p>
                <p>{e.price}</p>
                <hr />
              </div>
            );
          })}
      </div>
      <button onClick={() => removeCart()}>Remove Cart</button>
      <div>
        <h1>All Products</h1>
        {products.map((e, i) => {
          return (
            <div>
              <h1>{e.title}</h1>
              <img width={"10%"} src={e.image} alt={e.title} />
              <p>{e.description}</p>
              <p>{e.price}</p>
              <button onClick={() => addToCart(e)}>Add to cart</button>
              <Link href={`/Details/${e.id}`}>View Product</Link>
              <hr />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ProductCard;
