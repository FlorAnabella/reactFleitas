import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import ItemCount from "./ItemCount";
import ItemList from "./ItemList";

import { listItems } from "../mocks";

const onAdd = (n) => console.log(n);

const ItemListContainer = ({ }) => {
  const [items, setItems] = useState([]);
  const [catId, setCatId] = useState();
  const { id } = useParams();

  useEffect(() => {
    setCatId(parseInt(id));
  }, [id]);

  useEffect(() => {
    queryItems(setItems, catId);
  }, [catId]);

  return (
    <>
      <ItemList items={items} />
    </>
  );
};

function queryItems(returnFunc, catId) {
  return new Promise(function (resolve) {
    setTimeout(resolve, 2000);
  }).then(() => {
    returnFunc(listItems(catId));
  });
}

export default ItemListContainer;
