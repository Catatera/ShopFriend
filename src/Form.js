import React from "react";

export default function Form(props) {
  return (
    <form onSubmit={props.onSubmit}>
      <input type="text" onChange={props.onChangeProduct}></input>
      <input type="number" onChange={props.onSetQuantity}></input>
      <button>Adicionar</button>
    </form>
  );
}
