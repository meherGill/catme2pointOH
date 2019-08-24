import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';

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

const StudentList = () => {
  return (
    <Row>
      <Col sm = "6">
    <Card>
      <Card.Body className="text-center">
        <Card.Title style={{backgroundcol: "lightblue"}}>Students List</Card.Title>
        <Card.Text>
          <ListGroup>
            {students.map(student => (
              <ListGroup.Item action>{student.name}</ListGroup.Item>
            ))}
          </ListGroup>
        </Card.Text>
      </Card.Body>
    </Card>
    </Col>
    </Row>
  );
};

export default StudentList;
