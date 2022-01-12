import React from "react";
export default class ItemListContainer extends React.Component {
constructor (props) {
    super(props);
    this.state = {
        greeting: props.greeting, 
    };
}

render (){
    return (
        <h2 class="bg-danger">
            {this.state.greeting} 
        </h2>
    )
}
}
