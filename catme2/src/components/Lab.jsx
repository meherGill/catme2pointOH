import React from 'react';
import { Card, Button } from 'react-bootstrap';

const Lab = props => {
  const { lab } = props;

  return (
    <Card>
      <Card.Body>
        <Card.Title>{lab.name}</Card.Title>
        <Card.Text>
          {lab.assignments.map(assignment => (
            <p>{assignment}</p>
          ))}
        </Card.Text>
        <Button variant='primary'>Allocate</Button>
      </Card.Body>
    </Card>
  );
};

export default Lab;
