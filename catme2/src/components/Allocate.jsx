import React, { Component } from 'react';
import TeamList from './TeamList';
import { Container, Col, Row } from 'react-bootstrap';
import StudentList from './StudentList';

class Allocate extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col md={3}>
            <StudentList />
          </Col>
          <Col md={9}>
            <TeamList />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Allocate;
