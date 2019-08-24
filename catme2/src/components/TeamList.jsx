import React from 'react';
import Team from './Team';

const students = [
  {
    name: 'Alex',
    skills: ['Web Development', 'Mobile Development', 'Agile']
  },
  {
    name: 'Simran',
    skills: ['Web Development', 'Agile']
  },
  {
    name: 'John',
    skills: []
  }
];

const TeamList = () => {
  return (
    <div>
      <Team teamName='Whatever' students={[students[0], students[1]]} />
      <Team teamName='Whatever' students={[students[1], students[2]]} />
      <Team teamName='Whatever' students={students} />
    </div>
  );
};

export default TeamList;
