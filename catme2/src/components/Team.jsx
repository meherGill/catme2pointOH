import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';

const Team = props => {
  const { teamName, students } = props;

  return (
    <div>
      <Card>
        <Card.Body>
          <Card.Title>{teamName}</Card.Title>
          <Card.Text>
            <ListGroup>
              {students.map(student => (
                <ListGroup.Item action>{student}</ListGroup.Item>
              ))}
            </ListGroup>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Team;
