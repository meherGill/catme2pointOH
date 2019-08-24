import React from 'react';
import { Container, Col, Row, Badge } from 'react-bootstrap';
import Lab from './Lab';
import Allocate from './Allocate';
import { Card, Button, ListGroup } from 'react-bootstrap';
import { Switch, Route, Link, BrowserRouter as Router } from 'react-router-dom';
import firebase from 'firebase/app';

// Will need to change this to uni instead
class LabList extends React.Component {
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
      <Container>
        <h1>dwdww</h1>
        {this.state.units.map(unit => (
          <p style={{ color: 'white' }}>
            {unit.code} | {unit.title}
          </p>
        ))}
      </Container>
    );
  }
}

export default LabList;
