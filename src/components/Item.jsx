import React from "react";
import Card from 'react-bootstrap/Card'
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

function Item({id, title, price, description, pictureURL}) {
  return (
    <Link className="m-1" to={`/item/${id}`}>
      <Card style={{ width: "18rem" }} className="border border-2">
      <Card.Img variant="top" src={pictureURL} className="listImage" />
        <Card.Body>
        <Card.Title>{title}</Card.Title>
          <Card.Text>
          {description}
          </Card.Text>
        <Button variant="primary">{price}</Button>
        </Card.Body>
    </Card>
    </Link>
  );
}

export default Item;
