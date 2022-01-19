import React from "react";
import ItemCount from "./ItemCount";

const onAdd = (n)=>console.log(n)

const ItemListContainer = ({greeting}) => {
     return (
        <>
        <h2 class="bg-danger">
            {greeting} 
        </h2>
        <ItemCount stock={5} initial={1} onAdd={onAdd}/>
        </>
    )
};

export default ItemListContainer;