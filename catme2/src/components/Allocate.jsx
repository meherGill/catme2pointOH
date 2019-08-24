import React, { Component } from 'react';
import TeamList from './TeamList';
import { Container, Col, Row, Dropdown } from 'react-bootstrap';
import StudentList from './StudentList';

import allocateRandomly from './MatchingStudentAlgo/Random';

class Allocate extends Component {
  state = {
    choice: '',
    teams: [],
  };

  chooseAlgorithm = choice => {
    switch (choice) {
      case 'Manual':
        this.setState({
          choice: 'Manual',
          teams: [],
        });
        break;
      case 'Random':
        this.setState({
          choice: 'Random',
          teams: allocateRandomly(),
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
              <StudentList students={['Jack', 'Ridley', 'Ganz']} />
            </Col>
            <Col md={9}>
              <TeamList teams={[['Jack', 'Ridley'], ['Jack', 'Ridley']]} />
            </Col>
          </Row>
        );
      case 'Random':
        let renderedContent = <TeamList teams={this.state.teams} />;
        return <div>{renderedContent}</div>;
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
