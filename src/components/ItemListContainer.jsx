import React from "react";
import ItemCount from "./ItemCount";

export default class ItemListContainer extends React.Component {
constructor (props) {
    super(props);
    this.state = {
        greeting: props.greeting, 
    };
}

render (){
    return (
        <>
        <h2 class="bg-danger">
            {this.state.greeting} 
        </h2>
        <ItemCount stock={5} initial={1} onAdd={(n)=>console.log(n)}/>
        </>
    )
}
}
