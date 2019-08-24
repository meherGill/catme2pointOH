function random_matching(studentCollection, unitObject, studentsPerTeam) {
    let index_array = new Array(studentCollection.length).fill(0);
    index_array = index_array.map((curr, index) => index);

    let shuffled_index_array = new Array(studentCollection.length);
    //   let keySkills = unitObject.required_skills;

    let i = 0;
    while (index_array.length !== 0) {
        let index_to_get = Math.floor(
            (Math.random() *
                Math.pow(
                    10,
                    Math.ceil(Math.log(index_array.length) / Math.log(10))
                )) %
                index_array.length
        );

        shuffled_index_array[i] = index_array[index_to_get];
        i++;
        index_array.splice(index_to_get, 1);
    }

    let shuffled_students = new Array();

    i = 0;
    let tempArray = new Array();
    for (let randIndex of shuffled_index_array) {
        i += 1;
        tempArray.push(studentCollection[randIndex]);
        if (i === studentsPerTeam) {
            i = 0;
            shuffled_students.push(tempArray);
            tempArray = new Array();
        }
    }
    if (tempArray.length != 0) {
        shuffled_students.push(tempArray);
    }

    return shuffled_students;
}

export default random_matching;
