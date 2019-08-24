import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import Lab from "./Lab";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import { Redirect } from "react-router-dom";

const labs = [
  {
    name: "Lab 1",
    assignments: [
      "Assignment 1: Prototype for website",
      "Assignment 2: Technical Report on Agile Process Management",
      "Assignment 3: Milestone for website",
      "Assignment 4: Demo of Final Application"
    ]
  },
  {
    name: "Lab 2",
    assignments: [
      "Assignment 1: Prototype for website",
      "Assignment 2: Technical Report on Agile Process Management",
      "Assignment 3: Milestone for website",
      "Assignment 4: Demo of Final Application"
    ]
  },
  {
    name: "Lab 3",
    assignments: [
      "Assignment 1: Prototype for website",
      "Assignment 2: Technical Report on Agile Process Management",
      "Assignment 3: Milestone for website",
      "Assignment 4: Demo of Final Application"
    ]
  },
  {
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

  const handleClick = key => {
    console.log(key);
  };

  for (const [index, value] of lab.entries()) {
    item.push(
      <li key={index} onClick={() => handleClick(index)}>
        {value.name}
      </li>
    );
  }

  return <Container> {item} </Container>;
};

export default LabList;
