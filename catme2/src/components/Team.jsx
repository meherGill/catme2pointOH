import React from 'react';
import { Card } from 'semantic-ui-react';

const Team = props => {
  const { teamName } = props;

  return (
    <div>
      <Card>
        <Card.Body>
          <Card.Title>{teamName}</Card.Title>
          <Card.Text>
            {/* <ListGroup>
              {students.map(student => (
                <ListGroup.Item action>
                  {student.name} | {student.id}
                </ListGroup.Item>
              ))}
            </ListGroup> */}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Team;
