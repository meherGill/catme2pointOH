import React from 'react';
import { SegmentGroup, Segment } from 'semantic-ui-react';

const Team = props => {
  const { teamName, students } = props;

  return (
    <div>
      <SegmentGroup style={{ margin: '1rem' }}>
        {students.length > 0 && (
          <Segment attached="top" color="teal" inverted>
            Team {teamName}
          </Segment>
        )}
        {students.map(student => (
          <Segment>{student.name}</Segment>
        ))}
      </SegmentGroup>
    </div>
  );
};

export default Team;
