import React from 'react';
import { SegmentGroup, Segment, Label } from 'semantic-ui-react';

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
          <Segment>
            {student.name}
            <div style={{ float: 'right' }}>
              {Object.keys(student.skills).map(key => (
                <Label>
                  {key}:{student.skills[key] / 10}
                </Label>
              ))}
            </div>
          </Segment>
        ))}
      </SegmentGroup>
    </div>
  );
};

export default Team;
