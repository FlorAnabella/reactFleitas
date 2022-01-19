import React, { useState } from "react";
import ItemCount from "./ItemCount";
import ItemList from "./ItemList";

const onAdd = (n) => console.log(n);

const ItemListContainer = ({ greeting }) => {
  const [items, setItems] = useState([]);

  queryItems(setItems)
  return (
    <>
      <h2 class="bg-danger">{greeting}</h2>
      <ItemCount stock={5} initial={1} onAdd={onAdd} />
      <ItemList items={items} />
    </>
  );
};

function queryItems(returnFunc) {
  return new Promise(function (resolve) {
    setTimeout(resolve, 2000);
  }).then(() => {
    returnFunc([
      {
        id: 1,
        title: "Medusa",
        description:
          "Especie exótica capturada en la selva tropical del Amazonas. Cuidado! no quitarle la venda!",
        price: "U$S4000",
        pictureURL:
          "https://i.pinimg.com/originals/24/62/11/246211f84293556598824f5316d20370.jpg",
      },
      {
        id: 2,
        title: "Sirena",
        description:
          "No vayas a enamorarte de ella, y apegate al código de alimentación.",
        price: "U$S6000",
        pictureURL:
          "https://i.pinimg.com/736x/bf/b7/54/bfb754274fb3f291bf5a533d3af5759a.jpg",
      },
      {
        id: 3,
        title: "Kirin dorado",
        description:
          "Todos tus deseos se harán realidad, dice la antigua maldición China.",
        price: "U$S6000",
        pictureURL:
          "https://i.pinimg.com/originals/a0/c1/46/a0c146e519158875185168486ce27d7f.jpg",
      },
    ]);
  });
}

export default ItemListContainer;
