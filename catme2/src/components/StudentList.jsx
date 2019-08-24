import React from 'react';
import { SegmentGroup, Segment } from 'semantic-ui-react';

// const students = [
//   {
//     name: 'Alex',
//     skills: ['Web Development', 'Mobile Development', 'Agile'],
//   },
//   {
//     name: 'Simran',
//     skills: ['Web Development', 'Agile'],
//   },
//   {
//     name: 'John',
//     skills: [],
//   },
// ];

const StudentList = props => {
  const { students } = props;
  return (
    <SegmentGroup>
      {students.map((student, index) => {
        if (index == 1) {
          return <Segment attached="top">Student List</Segment>;
        } else {
          return <Segment>{student.name}</Segment>;
        }
      })}
    </SegmentGroup>
  );
};

export default StudentList;
