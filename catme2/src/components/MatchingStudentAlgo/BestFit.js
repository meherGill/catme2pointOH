function best_fit_matching(studentCollection, unitObject, studentsPerTeam) {
  function refinedStudent(id, kys) {
    (this.id = id), (this.skills = new Object()), (this.kys = kys);
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
  return arrayToReturn;
}

export default best_fit_matching;
