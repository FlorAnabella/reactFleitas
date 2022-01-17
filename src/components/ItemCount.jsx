import React, { useState } from "react";
import Button from "react-bootstrap/Button";

const ItemCount = ({stock, initial, onAdd}) => {
  const [count, setCount] = useState(initial);
  return (
    <>
      <div>
        <Button
          variant="outline-info"
          onClick={() => {
            if (count > 0) {
              setCount(count - 1);
            }
          }}
        >
          -
        </Button>{" "}
        {count}{" "}
        <Button
          variant="outline-info"
          onClick={() => {
            if (count < stock) {
              setCount(count + 1);
            }
          }}
        >
          +
        </Button>
      </div>
      <Button variant="outline-info" onClick={() => onAdd(count)}>Agregar al carrito</Button>
    </>
  );
};

export default ItemCount;
