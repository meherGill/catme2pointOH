import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import Lab from './Lab';

const labs = [
  {
    name: 'Lab 1',
    assignments: [
      'Assignment 1: Prototype for website',
      'Assignment 2: Technical Report on Agile Process Management',
      'Assignment 3: Milestone for website',
      'Assignment 4: Demo of Final Application'
    ]
  },
  {
    name: 'Lab 2',
    assignments: [
      'Assignment 1: Prototype for website',
      'Assignment 2: Technical Report on Agile Process Management',
      'Assignment 3: Milestone for website',
      'Assignment 4: Demo of Final Application'
    ]
  },
  {
    name: 'Lab 3',
    assignments: [
      'Assignment 1: Prototype for website',
      'Assignment 2: Technical Report on Agile Process Management',
      'Assignment 3: Milestone for website',
      'Assignment 4: Demo of Final Application'
    ]
  },
  {
    name: 'Lab 4',
    assignments: [
      'Assignment 1: Prototype for website',
      'Assignment 2: Technical Report on Agile Process Management',
      'Assignment 3: Milestone for website',
      'Assignment 4: Demo of Final Application'
    ]
  }
];
const LabList = props => {
  const lab = [];

  const handleClick = index => {
    this.props.history.push("/allocate", { key: index });
  };

  for (const [index, value] of props.entries()) {
    lab.push(
      <li key={index} onClick={() => handleClick(index)}>
        {value}
      </li>
    );
  }

  return <div> {lab} </div>;
};

export default LabList;
