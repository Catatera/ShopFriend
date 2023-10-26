import React from "react";
export default function List(props) {
  return (
      <table>
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
            </tr>
          ))}
        </tbody>
      </table>
  );
}
