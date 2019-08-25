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

let narutoSplit = (arr, num) => {
  let yarr = new Array();
  for (let i = 0; i < num - 1; i++) {
    if (i % 2 === 0) {
      yarr.push(arr.pop());
    } else {
      yarr.push(arr.shift());
    }
  }

  let mid = Math.floor(arr.length / 2);
  yarr.push(arr.splice(mid, 1)[0]);
  return yarr;
};

let normalSplit = (arr, num) => {
  let yarr = new Array();
  for (let i = 0; i < num; i++) {
    if (i % 2 === 0) {
      yarr.push(arr.pop());
    } else {
      yarr.push(arr.shift());
    }
  }
  return yarr;
};

function balanced_matching(studentCollection, unitObject, studentsPerTeam) {
  function refinedStudent(id, kys) {
    this.id = id;
    this.skills = new Object();
    this.kys = kys;
  }

  console.log(studentCollection);

  let refinedStudentArray = new Array();
  for (let student of studentCollection) {
    let stu = new refinedStudent(
      student.id,
      Object.keys(student.skills).filter(val =>
        unitObject['requiredSkills'].includes(val)
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

  for (let elem of refinedStudentArray) {
    console.log(elem);
  }

  while (refinedStudentArray.length > 0) {
    if (refinedStudentArray.length >= studentsPerTeam) {
      if (studentsPerTeam % 2 == 0) {
        arrayToReturn.push(normalSplit(refinedStudentArray, studentsPerTeam));
      } else {
        arrayToReturn.push(narutoSplit(refinedStudentArray, studentsPerTeam));
      }
    } else {
      for (let i = 0; i < refinedStudentArray.length; i++) {
        valToPush.push(refinedStudentArray.pop());
      }
    }
    // console.log("")
  }

  arrayToReturn.push(valToPush);
  console.log(arrayToReturn);
  let newArray = [];

  for (let each of arrayToReturn) {
    let newVal = [];
    for (let e of each) {
      console.log(e);
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

export default balanced_matching;
