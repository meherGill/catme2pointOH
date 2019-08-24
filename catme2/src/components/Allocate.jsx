import React, { Component } from 'react';
import TeamList from './TeamList';
import { Container, Col, Row, Dropdown } from 'react-bootstrap';
import StudentList from './StudentList';

import allocateRandomly from './MatchingStudentAlgo/Random';
import allocateBalanced from './MatchingStudentAlgo/Balanced';
import allocateBestFit from './MatchingStudentAlgo/BestFit';

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
      case 'Balanced':
        this.setState(
          {
            choice: 'Balanced',
            teams: allocateBalanced(),
          },
          () => {
            console.log('watch this');
            console.log(this.state.teams);
          }
        );
        break;
      case 'Best Fit':
        this.setState({
          choice: 'Best Fit',
          teams: allocateBestFit(),
        });
        break;
      default:
        this.setState({
          choice: '',
          teams: [],
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
      case '':
        return <div></div>;
      default:
        let renderedContent = <TeamList teams={this.state.teams} />;
        return <div>{renderedContent}</div>;
    }
  };

  render() {
    return (
      <Container alignRight>
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
              <Dropdown.Item onClick={() => this.chooseAlgorithm('Best Fit')}>
                Best Fit
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
