import React, { Fragment } from 'react';
import './App.css';
import './vendor/fontawesome-free/css/all.min.css';
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
import Navbar from './components/NavbarComponent';
import Allocate from './components/Allocate';

class App extends React.Component {
  state = {
    unitsInfo: [],
    studentsInfo: [],
    teamsInfo: [],
  };

  render() {
    return (
      <Fragment>
        <Switch>
          <Route
            exact
            path="/"
            // render={props => (
            //   <LabList {...props} unitsInfo={this.state.unitsInfo} />
            // )}
            component={LabList}
          />
          <Route path="/units/:id/allocate" component={Allocate} />
        </Switch>
      </Fragment>
    );
  }
}

export default App;
