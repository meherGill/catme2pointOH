import React, { Fragment } from 'react';
import './App.css';

import { Route, Switch } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';

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
    // let data = [
    //   {
    //     name: 'Damson',
    //     skills: [{ programming: 4 }, { swift: 6 }],
    //     id: '98',
    //     allocated: false,
    //   },
    //   {
    //     name: 'Damit',
    //     skills: [{ programming: 4 }, { swift: 6 }],
    //     id: '87',
    //     allocated: false,
    //   },
    // ];

    // //let admin = require('firebase-admin');
    // // Add a new document in collection "cities" with ID 'LA'
    // for (const [index, value] of data.entries()) {
    //   let setDoc = firebase
    //     .firestore()
    //     .collection('units')
    //     .doc('7khKjbNYJxwKw0SxwdYe')
    //     .update({
    //       students: firebase.firestore.FieldValue.arrayUnion(value),
    //     });
    // }
    return (
      <Fragment>
        {/* <Switch> */}
        <Router>
          <Route
            exact
            path="/"
            render={props => <LabList {...props} units={this.state.units} />}
            component={LabList}
          />
          <Route path="/units/:id/allocate" component={Allocate} />
        </Router>
        {/* </Switch> */}
      </Fragment>
    );
  }
}

export default App;
