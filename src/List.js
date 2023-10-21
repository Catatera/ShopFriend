import React from "react";

export default function List(props) {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Produto</th>
            <th>Quantidade</th>
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
      {/* <ul>
        {props.products.map((product) => (
          <>
            <td id={product.id} quantity={product.quantity}>
              {product.value} {props.quantity}
            </td>
          </>
        ))}
      </ul> */}
    </div>
  );
}
