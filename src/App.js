import React, { useState } from "react";

export default function App() {
  const [typeProduct, setTypeProduct] = useState("");
  const [products, setProducts] = useState([]);

  const handleChange = (e) => {
    setTypeProduct(e.target.value);
    console.log(typeProduct);
  };

  function handleSubmit(e) {
    e.preventDefault();
    const addProduct = setProducts([
      ...products,
      {
        id: products.length,
        value: typeProduct,
      },
    ]);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange}></input>
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
