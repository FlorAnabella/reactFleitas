import React from "react";
import Item from "./Item";

function ItemList({ items }) {
  const ItemsMap = items.map((item) => {
    return (
      <Item id={item.id} description={item.description} title={item.title} price={item.price} pictureURL={item.pictureURL}/>
    )
  })
  return (
    <div className="d-inline-flex flex-wrap">
    {ItemsMap}
    </div>
  );
}

export default ItemList;
