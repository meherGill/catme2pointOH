import React, { Fragment } from 'react';
import Team from './Team';
import { SegmentGroup } from 'semantic-ui-react';

// const students = [
//   {
//     name: 'Alex',
//     skills: ['Web Development', 'Mobile Development', 'Agile'],
//   },
//   {
//     name: 'Simran',
//     skills: ['Web Development', 'Agile'],
//   },
//   {
//     name: 'John',
//     skills: [],
//   },
// ];

// const arr = [
//   'team1',
//   'team2',
//   'team3',
//   'team4',
//   'team5',
//   'team6',
//   'team7',
//   'team8',
// ];

const generateRandomTeamName = () => {
  let rand = Math.floor(Math.random() * 1000) + 1;
  return 'team ' + rand;
  // return copyArr.splice(rand, 1)[0];
};

const TeamList = props => {
  const { teamName, teams } = props;

  const renderedContent = teams.map(team => (
    <Team teamName={generateRandomTeamName()} students={[...team]} />
  ));

  return (
    <Fragment>
      {teams.length > 0 && (
        <h1 style={{ textAlign: 'center', color: 'white' }}>Teams</h1>
      )}
      {renderedContent}
    </Fragment>
  );
};

export default TeamList;
