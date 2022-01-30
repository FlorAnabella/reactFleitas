import React from "react";
import { Col, Container, Image, Row, Stack } from 'react-bootstrap';

import ItemCount from "./ItemCount";

function ItemDetail({ item }) {
  return (
    <Container className="border my-2">
      <Row>
        <Col xs={8}>
          <Image src={item.pictureURL} height={"500px"} />
        </Col>
        <Col>
          <Stack gap={3}>
            <div className="h1">{item.title}</div>
            <div className="h4">{item.description}</div>
            <div className="border">Valor: {item.price}</div>
            <ItemCount stock={2} initial={1} onAdd={(count) => console.log(`Cantidad de productos: ${count}`)} />
          </Stack>
        </Col>
      </Row>
    </Container>
  );
}

export default ItemDetail;
