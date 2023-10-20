import React, { useState } from "react";
import List from "./List";

export default function App() {
  const [products, setProducts] = useState("");
  const [productList, setProductList] = useState([products]);
  function handleChange(event) {
    setProducts(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    setProductList([...products]);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange}></input>
        <button>Adicionar</button>
      </form>
      <br />
      <List product={products} productList={productList} />
    </>
  );
}
