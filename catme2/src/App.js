import React, { Fragment } from 'react';
import './App.css';

import { Container } from 'react-bootstrap';

import { Route, Switch, BrowserRouter } from 'react-router-dom';
import firebase from 'firebase';

import LabList from './components/LabList';
import Navbar from './components/NavbarComponent';
import Allocate from './components/Allocate';

class App extends React.Component {
  state = {
    unitsRef: null,
  };

  componentDidMount = () => {
    const ref = firebase.firestore().collection('units');

    this.setState({
      unitsRef: ref,
    });
  };

  render() {
    return (
      <Fragment>
        <Navbar />
        <Switch>
          <Route
            exact
            path="/"
            component={() => <LabList ref={this.state.unitsRef} />}
          />
          <Route path="/allocate" component={Allocate} />
        </Switch>
      </Fragment>
    );
  }
}

export default App;
