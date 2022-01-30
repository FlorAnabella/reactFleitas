import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import { BrowserRouter, Switch, Route } from "react-router-dom";

import logo from "./logo.svg";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

import NavBar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";

function App() {
  return (
    <BrowserRouter>
      <Container className="App">
        <Row>
          <NavBar/>
        </Row>
        <Row>
          <Switch>
            <Route exact path={["/", "/category/:id"]}>
              <ItemListContainer />
            </Route>
            <Route path="/item/:id">
              <ItemDetailContainer />
            </Route>
          </Switch>
        </Row>
      </Container>
    </BrowserRouter>
  );
}

export default App;
