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
    <Card>
      <Card.Body>
        <Card.Title>Students List</Card.Title>
        <Card.Text>
          <ListGroup>
            {students.map(student => (
              <ListGroup.Item action>{student.name}</ListGroup.Item>
            ))}
          </ListGroup>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default StudentList;
