import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { getItem } from "../mocks";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const [item, setItem] = useState([]);
  const { id } = useParams();
  const [itemId, setItemId] = useState(parseInt(id));

  useEffect(() => {
    setItemId(parseInt(id));
  }, [id]);

  useEffect(() => {
    queryItem(setItem, itemId);
  }, []);

  return (
    <>
      <ItemDetail item={item} />
    </>
  );
};

function queryItem(returnFunc, itemId) {
  return new Promise(function (resolve) {
    setTimeout(resolve, 2000);
  }).then(() => {
    returnFunc(getItem(itemId));
  });
}

export default ItemDetailContainer;
