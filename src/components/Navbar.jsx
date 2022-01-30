import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

import CartWidget from "./CartWidget";

function NavBar() {
  return (
    <>
      <Navbar bg="danger" expand="lg">
        <Container fluid>
          <Navbar.Brand><Link to={"/"}>Pet Shop of Horrors</Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <NavDropdown title="Categorías" id="navbarScrollingDropdown">
                <NavDropdown.Item>
                  <Link to={"/category/1"}>Acuáticos</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to={"/category/2"}>Terrestres</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to={"/category/3"}>Voladores</Link>
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Información importante" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">
                  Condiciones de servicio
                </NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Posibles problemas
                </NavDropdown.Item>
              </NavDropdown>
              <CartWidget />
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Buscar"
                className="me-2"
                aria-label="Buscar"
              />
              <Button variant="outline-success">Buscar</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
export default NavBar;
