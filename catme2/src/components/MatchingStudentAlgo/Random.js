const students = [
  {
    id: '1231',
    name: 'B',
    skills: { Programming: 3, Agile: 5, dad: 10 },
  },
  {
    id: '221',
    name: 'Be',
    skills: { Programming: 2, Agile: 6, dad: 10 },
  },
  {
    id: '34',
    name: 'Bh',
    skills: { Programming: 3, Agile: 5, dad: 1 },
  },
  {
    id: '21',
    name: 'Bi',
    skills: { Programming: 13, Agile: 5, dad: 1 },
  },
  {
    id: '54',
    name: 'Bi',
    skills: { Programming: 13, Agile: 2, dad: 11 },
  },
];

function random_matching(
  studentCollection = students,
  unitObject,
  studentsPerTeam = 3
) {
  const studentsLeft = [...studentCollection];
  const teams = [];

  while (studentsLeft.length !== 0) {
    let team = [];

    for (let i = 0; i < studentsPerTeam; i++) {
      let student =
        studentsLeft[Math.floor(Math.random() * studentsLeft.length)];
      let index = studentsLeft.indexOf(student);
      team.push(student);
      studentsLeft.splice(index, 1);
    }

    teams.push(team);
  }

  return [...teams];

  //   let index_array = new Array(studentCollection.length).fill(0);
  //   index_array = index_array.map((curr, index) => index);

  //   let shuffled_index_array = new Array(studentCollection.length);
  //   //   let keySkills = unitObject.required_skills;

  //   let i = 0;
  //   while (index_array.length !== 0) {
  //     let index_to_get = Math.floor(
  //       (Math.random() *
  //         Math.pow(10, Math.ceil(Math.log(index_array.length) / Math.log(10)))) %
  //         index_array.length
  //     );

  //     shuffled_index_array[i] = index_array[index_to_get];
  //     i++;
  //     index_array.splice(index_to_get, 1);
  //   }

  //   let shuffled_students = [];

  //   i = 0;
  //   let tempArray = [];
  //   for (let randIndex of shuffled_index_array) {
  //     i += 1;
  //     tempArray.push(studentCollection[randIndex]);
  //     if (i === studentsPerTeam) {
  //       i = 0;
  //       shuffled_students.push(tempArray);
  //       tempArray = [];
  //     }
  //   }
  //   if (tempArray.length != 0) {
  //     shuffled_students.push(tempArray);
  //   }

  //   return shuffled_students;
}

export default random_matching;
