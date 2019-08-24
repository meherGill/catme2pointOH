import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import Lab from "./Lab";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import { Card, Button, ListGroup } from "react-bootstrap";

const labs = [
  {
    id: "000",
    name: "Lab 1",
    assignments: [
      "Assignment 1: Prototype for website",
      "Assignment 2: Technical Report on Agile Process Management",
      "Assignment 3: Milestone for website",
      "Assignment 4: Demo of Final Application"
    ]
  },
  {
    id: "001",
    name: "Lab 2",
    assignments: [
      "Assignment 1: Prototype for website",
      "Assignment 2: Technical Report on Agile Process Management",
      "Assignment 3: Milestone for website",
      "Assignment 4: Demo of Final Application"
    ]
  },
  {
    id: "002",
    name: "Lab 3",
    assignments: [
      "Assignment 1: Prototype for website",
      "Assignment 2: Technical Report on Agile Process Management",
      "Assignment 3: Milestone for website",
      "Assignment 4: Demo of Final Application"
    ]
  },
  {
    id: "003",
    name: "Lab TEST",
    assignments: [
      "Assignment 1: Prototype for website",
      "Assignment 2: Technical Report on Agile Process Management",
      "Assignment 3: Milestone for website",
      "Assignment 4: Demo of Final Application"
    ]
  }
];

const LabList = props => {
  //const lab = [];
  const lab = labs;
  const item = [];

  const handleClick = (key, key_id) => {
    console.log(key, key_id);
    // Fail to route for hours
  };

  for (const [index, value] of lab.entries()) {
    item.push(
      <Card>
        <Card.Body>
          <Card.Title>{value.name}</Card.Title>
          <Card.Text>
            <ListGroup>
              {value.assignments.map((data, index) => (
                <ListGroup.Item
                  action
                  onClick={() => handleClick(index, value.id)}
                >
                  {data}
                </ListGroup.Item>
              ))}
              {/* {value.assignments.map((value, index) => {
                return <li key={index}>{value}</li>;
              })} */}
            </ListGroup>
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }

  return <Container> {item} </Container>;
};

export default LabList;