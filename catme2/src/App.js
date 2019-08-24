import React, { Fragment } from 'react';
import './App.css';

import { Route, Switch } from 'react-router-dom';

import LabList from './components/LabList';
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
