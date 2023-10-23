import React, { useState } from "react";
import List from "./List";
import Form from "./Form";
export default function App() {
  const [typeProduct, setTypeProduct] = useState("");
  const [products, setProducts] = useState([]);
  const [quantity, setQuantity] = useState("");

  const handlechangeProduct = (e) => {
    setTypeProduct(e.target.value);
  };

  const handleQuantity = (e) => { 
    setQuantity(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault();
    const addProduct = setProducts([
      ...products,
      {
        id: products.length+1,
        value: typeProduct,
        quantity: quantity,
      },
    ]);
  }

  return (
    <>
      <Form onChangeProduct={handlechangeProduct} onSetQuantity={handleQuantity} onSubmit={handleSubmit} />

      <List products={products} quantity = {quantity} />
    </>
  );
}
