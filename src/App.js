import React, { useState, createContext, Fragment } from "react";
import Header from "./Header";
import List from "./List";
import Form from "./Form";
import ButtonTheme from "./ButtonTheme";
import styles from "./App.scss";

export const ThemeContext = createContext("dark");

export default function App() {
  const [typeProduct, setTypeProduct] = useState("");
  const [products, setProducts] = useState([]);
  const [quantity, setQuantity] = useState("");
  const [theme, setTheme] = useState("dark");

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
    setProducts((prevState) =>
      prevState.filter((product) => product.id !== productID)
    );
  }

  function handleToggleTheme() {
    setTheme((prevState) => (prevState === "dark" ? "light" : "dark"));
  }

  return (
    <ThemeContext.Provider value={theme}>
      <div
        style={{
          background: theme === "dark" ? "#282828" : "#f5f2d0",
          height: "100vh",
        }}d
      >
        <Header />
        <main>
          <Form
            onChangeProduct={handlechangeProduct}
            onSetQuantity={handleQuantity}
            onSubmit={handleSubmit}
          />
          <List
            products={products}
            quantity={quantity}
            onDelete={handleDelete}
          />
        </main>
        <aside>
          <ButtonTheme onToggleTheme={handleToggleTheme} />
        </aside>
      </div>
    </ThemeContext.Provider>
  );
}
