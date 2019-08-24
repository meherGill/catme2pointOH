import React, { Fragment } from "react";
import "./App.css";

import { Container } from "react-bootstrap";

import { Route, Switch, BrowserRouter } from "react-router-dom";

import LabList from "./components/LabList";
import Navbar from "./components/NavbarComponent";
import Allocate from "./components/Allocate";

function App() {
  return (
    <Fragment>
      <Navbar />
      <Container>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={LabList} />
            <Route path="/allocate" component={Allocate} />
          </Switch>
        </BrowserRouter>
      </Container>
    </Fragment>
  );
}

export default App;
