import React, { Fragment } from 'react';
import './App.css';
import './index.css';
import './vendor/fontawesome-free/css/all.min.css'
// import './vendor/jquery/jquery.min.js'
// import './vendor/bootstrap/js/bootstrap.bundle.min.js'

// import './vendor/jquery-easing/jquery.easing.min.js'

// import './js/sb-admin-2.min.js'


// import './vendor/chart.js/Chart.min.js'

// import './js/demo/chart-area-demo.js'
// import './js/demo/chart-pie-demo.js'

import { Container } from 'react-bootstrap';

import { Route, Switch, BrowserRouter } from 'react-router-dom';
import firebase from 'firebase';

import LabList from './components/LabList';
import TopNavbar from './components/NavbarComponent';
import SideNavbar from './components/SideNavbar';
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
        <TopNavbar />
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
