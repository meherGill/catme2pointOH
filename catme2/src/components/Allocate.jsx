import React, { Component } from 'react';
import TeamList from './TeamList';
import StudentList from './StudentList';

import allocateRandomly from './MatchingStudentAlgo/Random';
import allocateBalanced from './MatchingStudentAlgo/Balanced';
import allocateBestFit from './MatchingStudentAlgo/BestFit';
import { Grid, Dropdown } from 'semantic-ui-react';

import {
  Card,
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility,
} from 'semantic-ui-react';

class Allocate extends Component {
  state = {
    teams: [],
    students: [],
  };

  chooseAlgorithm = (e, { value }) => {
    console.log(e);
    this.setState(
      {
        value,
      },
      console.log(this.state)
    );
    switch (value) {
      case 'Manual':
        this.setState(
          {
            teams: [],
          },
          this.renderTeams
        );
        break;
      case 'Random':
        this.setState(
          {
            teams: allocateRandomly(this.state.students, 3),
          },
          this.renderTeams
        );
        break;
      case 'Balanced':
        this.setState(
          {
            teams: allocateBalanced(),
          },
          this.renderTeams
        );
        break;
      case 'Best Fit':
        this.setState(
          {
            teams: allocateBestFit(),
          },
          this.renderTeams
        );
        break;
      default:
        this.setState(
          {
            teams: [],
          },
          this.renderTeams
        );
        break;
    }
  };

  renderTeams = () => {
    switch (this.state.value) {
      case 'Manual':
        return <div>manual</div>;
      case '':
        return <div></div>;
      default:
        let renderedContent = (
          <TeamList teamName="Whatever" teams={this.state.teams} />
        );
        return <div>{renderedContent}</div>;
    }
  };

  componentDidMount() {
    const { unit } = this.props.location.state;
    console.log(unit);
    console.log(this.props.location.state);
    this.setState({
      teams: unit.teams,
      students: unit.students,
    });
  }

  render() {
    return (
      <div>
        <Header
          inverted
          as="h2"
          textAlign="align-left"
          style={{ padding: '1em 1em' }}
        >
          <Icon inverted name="users" style={{ testAlign: 'left' }} circular />
          <Header.Content>Allocation</Header.Content>
        </Header>
      </div>
      // <Container alignRight>
      //   <Row>
      //     <Dropdown>
      //       <Dropdown.Toggle variant="success" id="dropdown-basic">
      //         Choose Algorithm
      //       </Dropdown.Toggle>
    const selectionOptions = [
      {
        key: 'Balanced',
        text: 'Balanced',
        value: 'Balanced',
      },
      {
        key: 'High achievers',
        text: 'High achievers',
        value: 'High achievers',
      },
      {
        key: 'Random',
        text: 'Random',
        value: 'Random',
      },
    ];

    const { value } = this.state;

    return (
      <Grid centered style={{ marginTop: '2rem' }}>
        <Grid.Row>
          <Grid.Column width={6}>
            <Dropdown
              placeholder="Select algorithm"
              fluid
              selection
              options={selectionOptions}
              onChange={this.chooseAlgorithm}
              value={value}
            ></Dropdown>
          </Grid.Column>
        </Grid.Row>
        <Grid.Column width={10}>{this.renderTeams()}</Grid.Column>
      </Grid>
    );
  }
}

export default Allocate;
