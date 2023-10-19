import React, { useState } from "react";
import List from "./List";

export default function App() {
  const [products, setProducts] = useState();

  function handleChange(e) {
    e.preventDefault();
    products.length > 0
      ? console.log(products)
      : console.log("É necessário inserir um produto!");
  }

  return (
    <>
      <form onSubmit={handleChange}>
        <input
          type="text"
          onChange={(e) => setProducts(e.target.value)}
        ></input>
        <button>Add</button>
      </form>
      <br />
      <List products={products} />
    </>
  );
}
