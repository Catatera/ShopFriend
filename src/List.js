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
            <td>{props.productList[0]}</td>
            <td>{Math.floor(10 * Math.random())}</td>
          </tr>
          <tr>
            <td>{props.productList[1]}</td>
            <td>{Math.floor(10 * Math.random())}</td>
          </tr>
          <tr>
            <td>{props.productList[2]}</td>
            <td>{Math.floor(10 * Math.random())}</td>
          </tr>
          <tr>
            <td>{props.productList[3]}</td>
            <td>{Math.floor(10 * Math.random())}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
