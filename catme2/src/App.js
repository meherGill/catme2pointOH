import React, { Fragment } from 'react';
import './App.css';

import { Route, Switch } from 'react-router-dom';

import firebase from 'firebase';

import LabList from './components/LabList';
import Allocate from './components/Allocate';

class App extends React.Component {
  state = {
    units: [],
  };

  componentDidMount() {
    let unitInfoStore = [];

    const unitSnapshot = firebase
      .firestore()
      .collection('units')
      .get()
      .then(snap => {
        snap.docs.forEach(doc => {
          unitInfoStore.push(doc.data());
        });
        this.setState({
          units: unitInfoStore,
        });
      });
  }

  render() {
    return (
      <Fragment>
        <Switch>
          <Route
            exact
            path="/"
            render={props => <LabList {...props} units={this.state.units} />}
            component={LabList}
          />
          <Route path="/units/:id/allocate" component={Allocate} />
        </Switch>
      </Fragment>
    );
  }
}

export default App;
