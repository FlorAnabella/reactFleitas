import Item from "./Item";

function ItemList({ items }) {
    const ItemsMap = items.map((item) => <Item id={item.id} description={item.description} title={item.title} price={item.price} pictureURL={item.pictureURL}/>)
  return (
    <>
      {ItemsMap}
    </>
  );
}

export default ItemList;
