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
    unitsInfo: [],
  };

  componentDidMount = () => {
    let tempInfo = [];

    const snapshot = firebase
      .firestore()
      .collection('units')
      .get()
      .then(snap => {
        snap.docs.forEach(doc => {
          tempInfo.push(doc.data());
        });
      });

    console.log(tempInfo);
    this.state.unitsInfo = tempInfo;
    console.log(this.state.unitsInfo);
  };

  render() {
    return (
      <Fragment>
        <Navbar />
        <Switch>
          <Route
            exact
            path="/"
            render={props => (
              <LabList {...props} unitsInfo={this.state.unitsInfo} />
            )}
          />
          <Route path="/allocate" component={Allocate} />
        </Switch>
      </Fragment>
    );
  }
}

export default App;
