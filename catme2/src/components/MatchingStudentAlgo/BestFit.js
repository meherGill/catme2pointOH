// const students = [
//   {
//     id: '1231',
//     name: 'B',
//     skills: { Programming: 3, Agile: 5, dad: 10 },
//   },
//   {
//     id: '221',
//     name: 'Be',
//     skills: { Programming: 2, Agile: 6, dad: 10 },
//   },
//   {
//     id: '34',
//     name: 'Bh',
//     skills: { Programming: 3, Agile: 5, dad: 1 },
//   },
//   {
//     id: '21',
//     name: 'Bi',
//     skills: { Programming: 13, Agile: 5, dad: 1 },
//   },
//   {
//     id: '54',
//     name: 'Bi',
//     skills: { Programming: 13, Agile: 2, dad: 11 },
//   },
// ];

function best_fit_matching(studentCollection, unitObject, studentsPerTeam) {
  function refinedStudent(id, kys) {
    this.id = id;
    this.skills = new Object();
    this.kys = kys;
  }

  let refinedStudentArray = new Array();
  for (let student of studentCollection) {
    let stu = new refinedStudent(
      student.id,
      Object.keys(student.skills).filter(val =>
        unitObject['required_skills'].includes(val)
      )
    );
    // console.log(stu.kys)
    for (let k of stu.kys) {
      stu.skills[k] = student.skills[k];
    }
    // console.log(stu.skills)
    let valToPush = [
      stu.id,
      Object.keys(stu.skills)
        .map(val => stu.skills[val])
        .reduce((curr, acc) => curr + acc, 0),
    ];
    refinedStudentArray.push(valToPush);
  }
  refinedStudentArray.sort((a, b) => a[1] - b[1]);

  let arrayToReturn = new Array();
  let valToPush = new Array();
  while (refinedStudentArray.length > 0) {
    let valToPush = new Array();

    if (refinedStudentArray.length >= studentsPerTeam) {
      for (let i = 0; i < studentsPerTeam; i++) {
        valToPush.push(refinedStudentArray.pop());
      }
    } else {
      let l = refinedStudentArray.length;
      for (let i = 0; i < l; i++) {
        valToPush.push(refinedStudentArray.pop());
      }
    }
    arrayToReturn.push(valToPush);
  }

  let newArray = [];

  for (let each of arrayToReturn) {
    let newVal = [];
    for (let e of each) {
      console.log(e[0][0]);
      let stu = studentCollection.filter(val => {
        return val.id == e[0];
      })[0];
      newVal.push(stu);
    }
    newArray.push(newVal);
  }
  console.log(newArray);
  return newArray;
}

export default best_fit_matching;
