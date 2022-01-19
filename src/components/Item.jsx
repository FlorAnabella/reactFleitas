import Card from 'react-bootstrap/Card'
import Button from "react-bootstrap/Button";

function Item({id, title, price, description, pictureURL}) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={pictureURL} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
        <Button variant="primary">{price}</Button>
      </Card.Body>
    </Card>
  );
}

export default Item;