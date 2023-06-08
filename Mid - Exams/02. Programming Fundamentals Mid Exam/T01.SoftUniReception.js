function receptions(input) {

    let employee1 = Number(input.shift());
    let employee2 = Number(input.shift());
    let employee3 = Number(input.shift());
    let studentsCount = Number(input.shift());

    let allEmployees = employee1 + employee2 + employee3;

    let counter = 0;
    let timeCounter = 0;
    let answers = 0;
    while (studentsCount >= 0) {

        counter++
        if (counter % 3 === 0) {
            let momentStudents = studentsCount;

            answers = allEmployees * counter;
            momentStudents -= answers;
            if (momentStudents <= 0) {
                break;
            }
            counter = 0;
            studentsCount -= answers;
            timeCounter += 4;
        }
    }
    while (studentsCount > 0) {

        studentsCount -= allEmployees;
        timeCounter++;

    }

    console.log(`Time needed: ${timeCounter}h.`);

}