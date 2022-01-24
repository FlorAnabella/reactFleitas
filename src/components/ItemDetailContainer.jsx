import React, { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = ({ greeting }) => {
  const [item, setItem] = useState([]);

  useEffect(() => {
    getItem(setItem);
  }, []);
  return (
    <>
      <ItemDetail item={item} />
    </>
  );
};

function getItem(returnFunc) {
  return new Promise(function (resolve) {
    setTimeout(resolve, 2000);
  }).then(() => {
    returnFunc(
      {
        id: 1,
        title: "Medusa",
        description:
        "Especie exótica capturada en la selva tropical del Amazonas. Cuidado! no quitarle la venda!",
        price: "U$S4000",
        pictureURL:
        "https://i.pinimg.com/originals/24/62/11/246211f84293556598824f5316d20370.jpg",
      }
    );
  });
}

export default ItemDetailContainer;
