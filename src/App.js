import React, { useState } from "react";
import List from "./List";

export default function App() {
  const [products, setProducts] = useState("");
  let [productList,setProductList] = useState(products);
  function handleChange(event) {
    setProducts(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    setProductList(
      ...products
    );
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange}></input>
        <button>Adicionar</button>
      </form>
      <br />
      <p>{productList}</p>
      <List />
    </>
  );
}
