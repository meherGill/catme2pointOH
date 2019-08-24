import React, { Component } from 'react';
import TeamList from './TeamList';
import { Container, Col, Row, Dropdown } from 'react-bootstrap';
import StudentList from './StudentList';

class Allocate extends Component {
  state = {
    choice: '',
  };

  chooseAlgorithm = choice => {
    console.log('called');
    switch (choice) {
      case 'Manual':
        this.setState({
          choice: 'Manual',
        });
        break;
      default:
        this.setState({
          choice: '',
        });
        break;
    }
  };

  renderTeams = () => {
    switch (this.state.choice) {
      case 'Manual':
        return (
          <Row>
            <Col md={3}>
              <StudentList />
            </Col>
            <Col md={9}>
              <TeamList />
            </Col>
          </Row>
        );
      default:
        return <div></div>;
    }
  };

  render() {
    return (
      <Container>
        <Row>
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Choose Algorithm
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item onClick={() => this.chooseAlgorithm('Manual')}>
                Manual
              </Dropdown.Item>
              <Dropdown.Item onClick={() => this.chooseAlgorithm('Random')}>
                Random
              </Dropdown.Item>
              <Dropdown.Item onClick={() => this.chooseAlgorithm('Balanced')}>
                Balanced
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => this.chooseAlgorithm('High Performing')}
              >
                High performing
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Row>

        {this.renderTeams()}
      </Container>
    );
  }
}

export default Allocate;
