import React from 'react';
import Team from './Team';

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
  const { teams } = props;

  const renderedContent = teams.map(team => (
    <Team teamName="Whatever" students={[...team]} />
  ));

  return (
    <div>
      {renderedContent}
      {/* <Team teamName="Whatever" students={[students[0], students[1]]} />
      <Team teamName="Whatever" students={[students[1], students[2]]} />
      <Team teamName="Whatever" students={students} /> */}
    </div>
  );
};

export default TeamList;
