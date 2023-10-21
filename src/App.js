import React, { useState } from "react";

export default function App() {
  
  const [products, setProducts] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    const addProduct = setProducts([
      ...products,
      {
        id: products.length,
        value: `Produto ${products.length}`,
      },
    ]);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text"></input>
        <button>Adicionar</button>
      </form>
      <br />
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.value}</li>
        ))}
      </ul>
    </>
  );
}
