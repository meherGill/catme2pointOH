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

const TeamList = props => {
  const { teamName, teams } = props;

  const renderedContent = teams.map(team => (
    <Team teamName={teamName} students={[...team]} />
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
