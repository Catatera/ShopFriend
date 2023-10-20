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
          <tr>
            <td>{props.productList}</td>
            <td>{Math.floor(10 * Math.random())}</td>
          </tr>
          <tr>
            <td>{props.productList}</td>
            <td>{Math.floor(10 * Math.random())}</td>
          </tr>
          <tr>
            <td>{props.productList}</td>
            <td>{Math.floor(10 * Math.random())}</td>
          </tr>
          <tr>
            <td>{props.productList}</td>
            <td>{Math.floor(10 * Math.random())}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
