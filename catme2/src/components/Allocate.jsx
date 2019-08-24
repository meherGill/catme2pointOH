import React, { Component } from 'react';
import TeamList from './TeamList';
import StudentList from './StudentList';

import allocateRandomly from './MatchingStudentAlgo/Random';
import allocateBalanced from './MatchingStudentAlgo/Balanced';
import allocateBestFit from './MatchingStudentAlgo/BestFit';
import { Grid, Dropdown } from 'semantic-ui-react';

class Allocate extends Component {
  state = {
    teams: [],
    students: [],
    requiredSkills: [],
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
            teams: allocateBalanced(
              this.state.students,
              this.props.location.state.unit,
              3
            ),
          },
          this.renderTeams
        );
        break;
      case 'Best Fit':
        this.setState(
          {
            teams: allocateBestFit(
              this.state.students,
              this.props.location.state.unit,
              3
            ),
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
      requiredSkills: unit.requiredSkills,
    });
  }

  render() {
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
