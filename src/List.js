import React, { useContext } from "react";
import { ThemeContext } from "./App";

export default function List(props) {
  const theme = useContext(ThemeContext);
  return (
    <table style={{ background: theme === "dark" ? "#cbd4c2" : "#cbcbcb" }}>
      <thead>
        <tr>
          <th>Product</th>
          <th>Quantity</th>
        </tr>
      </thead>
      <tbody>
        {props.products.map((product) => (
          <tr key={product.id}>
            <td>{product.value}</td>
            <td>{product.quantity}</td>
            <td>
              <button
                onClick={() => props.onDelete(product.id)}
                value={product.id}
              >
                X
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
