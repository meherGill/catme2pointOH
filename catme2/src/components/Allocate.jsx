import React, { Component } from 'react';
import TeamList from './TeamList';
import StudentList from './StudentList';

import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import App from '../App';
import allocateRandomly from './MatchingStudentAlgo/Random';
import allocateBalanced from './MatchingStudentAlgo/Balanced';
import allocateBestFit from './MatchingStudentAlgo/BestFit';
import { Icon, Grid, Dropdown, Label } from 'semantic-ui-react';

import {
  Card,
  Button,
  Container,
  Divider,
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
    requiredSkills: [],
    unit: null,
    studentsPerTeam: 3,
    teamName: '',
  };
  goHome = () => {
    window.location.reload();
  };
  handleStudentsChange = e => {
    this.setState(
      {
        studentsPerTeam: e.target.value,
      },
      this.setTeams
    );
  };

  chooseAlgorithm = (e, { value }) => {
    console.log(e);
    this.setState(
      {
        value,
      },
      this.setTeams
    );
  };

  setTeams = () => {
    switch (this.state.value) {
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
            teams: allocateRandomly(
              this.state.students,
              this.state.studentsPerTeam
            ),
          },
          this.renderTeams
        );
        break;
      case 'Balanced':
        this.setState(
          {
            teams: allocateBalanced(
              this.state.students,
              this.state.unit,
              this.state.studentsPerTeam
            ),
          },
          this.renderTeams
        );
        break;
      case 'High Achievers':
        this.setState(
          {
            teams: allocateBestFit(
              this.state.students,
              this.state.unit,
              this.state.studentsPerTeam
            ),
          },
          this.renderTeams
        );
        break;
      default:
        this.setState(
          {
            teams: [],
            teamName: '',
          },
          this.renderTeams
        );
        break;
    }
  };

  randomName = () => {
    const rand = (Math.floor(Math.random() * 10) + 1) % 7;

    switch (rand) {
      case 1:
        return 'team1';
        break;

      case 2:
        return 'team2';
        break;

      case 3:
        return 'team3';
        break;

      case 4:
        return 'team4';
        break;

      case 5:
        return 'team5';
        break;

      case 6:
        return 'team6';
        break;

      default:
        return 'team7';
        break;
    }
  };

  nameOrganiser = () => {
    return this.randomName();
  };

  renderTeams = () => {
    switch (this.state.value) {
      case 'Manual':
        return <div>manual</div>;
      case '':
        return <div></div>;
      default:
        let renderedContent = <TeamList teams={this.state.teams} />;
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
      requiredSkills: unit.requiredSkills,
      unit: unit,
      unitCode: unit.code,
      unitTitle: unit.title,
    });
  }

  render() {
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
        key: 'High Achievers',
        text: 'High Achievers',
        value: 'High Achievers',
      },
      {
        key: 'Random',
        text: 'Random',
        value: 'Random',
      },
    ];

    const studentOptions = [
      {
        key: '2',
        text: '2',
        value: 2,
      },
      {
        key: '3',
        text: '3',
        value: 3,
      },
      {
        key: '4',
        text: '4',
        value: 4,
      },
    ];

    const { value } = this.state;

    return (
      <div>
        <BrowserRouter>
          <Link to="/">
            <Icon
              arrow
              alternate
              circle
              left
              outline
              onClick={this.goHome}
              float="right"
            ></Icon>
          </Link>

          <Route exact path="/" Component={App} />
        </BrowserRouter>
        <div>
          <Header
            inverted
            as="h1"
            textAlign="align-left"
            style={{ padding: '1em 1em' }}
          >
            <BrowserRouter>
              <Icon onClick={this.goHome}>
                <Link to="/">
                  <Icon
                    inverted
                    name="angle left"
                    style={{ testAlign: 'left' }}
                    circular
                  />
                </Link>
              </Icon>
              <Route exact path="/" Component={App} />
            </BrowserRouter>
            <Icon
              inverted
              name="handshake"
              style={{ testAlign: 'left' }}
              circular
            />
            <Header.Content>
              Allocation - {this.state.unitCode} {this.state.unitTitle}
            </Header.Content>
          </Header>
        </div>
        <Grid centered style={{ marginTop: '2rem' }}>
          <Grid.Row>
            <Grid.Column width={6}>
              <Header style={{ color: 'white' }} as="h3" dividing>
                Select team-making algorithm
              </Header>
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
          <Grid.Row>
            <Grid.Column width={6}>
              <Header style={{ color: 'white' }} as="h3" dividing>
                Select students per team
              </Header>
              <input
                value={this.state.studentsPerTeam}
                style={{ padding: '1rem', width: '100%' }}
                type="number"
                onChange={this.handleStudentsChange}
              />
            </Grid.Column>
          </Grid.Row>
          <Grid.Column width={10}>{this.renderTeams()}</Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default Allocate;
