import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import Lab from './Lab';
import Allocate from './Allocate';
import { Card, Button, ListGroup } from 'react-bootstrap';
import { Switch, Route, Link, BrowserRouter as Router } from 'react-router-dom';
import * as firebase from 'firebase/app';
import { useState } from 'react';

const labs = [
  {
    id: '000',
    name: 'Lab 1',
    assignments: [
      'Assignment 1: Prototype for website',
      'Assignment 2: Technical Report on Agile Process Management',
      'Assignment 3: Milestone for website',
      'Assignment 4: Demo of Final Application',
    ],
  },
  {
    id: '001',
    name: 'Lab 2',
    assignments: [
      'Assignment 1: Prototype for website',
      'Assignment 2: Technical Report on Agile Process Management',
      'Assignment 3: Milestone for website',
      'Assignment 4: Demo of Final Application',
    ],
  },
  {
    id: '002',
    name: 'Lab 3',
    assignments: [
      'Assignment 1: Prototype for website',
      'Assignment 2: Technical Report on Agile Process Management',
      'Assignment 3: Milestone for website',
      'Assignment 4: Demo of Final Application',
    ],
  },
  {
    id: '003',
    name: 'Lab TEST',
    assignments: [
      'Assignment 1: Prototype for website',
      'Assignment 2: Technical Report on Agile Process Management',
      'Assignment 3: Milestone for website',
      'Assignment 4: Demo of Final Application',
    ],
  },
];

// Will need to change this to uni instead
const LabList = props => {
  //const lab = [];
  // Test run

  // const [unitInfo, setInfo] = useState([]);
  const { ref } = props;

  console.log(ref.get());

  // const lab = labs;
  const item = [];

  const handleClick = (key, key_id) => {
    console.log(key, key_id);
    // Fail to route for hours
  };

  // for (const [index, value] of unitInfo.entries()) {
  //   item.push(
  //     <Container>
  //       <Card>
  //         <Card.Body>
  //           <Card.Title>{value.name}</Card.Title>
  //           <Card.Text>
  //             <Link to="/Allocate">
  //               <ListGroup>
  //                 {value.assignments.map((data, index) => (
  //                   <ListGroup.Item
  //                     action
  //                     onClick={() => handleClick(index, value.id)}
  //                   >
  //                     {data}
  //                   </ListGroup.Item>
  //                 ))}
  //               </ListGroup>
  //             </Link>
  //           </Card.Text>
  //         </Card.Body>
  //       </Card>
  //       <br />
  //       <br />
  //     </Container>
  //   );
  // }

  return (
    <Container>
      <Switch>
        <Route path="/Allocate" component={Allocate} />
      </Switch>
      {/* {item} */}
    </Container>
  );
};

export default LabList;
