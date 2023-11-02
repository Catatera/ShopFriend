import React, { useState } from "react";
import Header from "./Header";
import List from "./List";
import Form from "./Form";
import styles from "./App.scss";
export default function App() {
  const [typeProduct, setTypeProduct] = useState("");
  const [products, setProducts] = useState([]);
  const [quantity, setQuantity] = useState("");

  const handlechangeProduct = (e) => {
    setTypeProduct(e.target.value);
  };

  const handleQuantity = (e) => {
    setQuantity(e.target.value);
  };

  function handleSubmit(e) {
    e.preventDefault();
    const addProduct = setProducts([
      ...products,
      {
        id: products.length,
        value: typeProduct,
        quantity: quantity,
      },
    ]);
  }
  function handleDelete(productID) {
    console.log({
      productID: productID,
    });
    console.log(products);
    setProducts((prevState) =>
      prevState.filter((product) => product.id !== productID)
    );
  }

  return (
    <>
      <Header className={styles.header} />
      <main>
        <Form
          onChangeProduct={handlechangeProduct}
          onSetQuantity={handleQuantity}
          onSubmit={handleSubmit}
        />
        <List products={products} quantity={quantity} onDelete={handleDelete} />
      </main>
    </>
  );
}