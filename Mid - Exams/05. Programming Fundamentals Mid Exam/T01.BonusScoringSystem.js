function bonusScoringSystem(input) {

    let numberStudent = Number(input.shift());
    let numberLecture = Number(input.shift());
    let additionalBonus = Number(input.shift());

    let bonusPoint = 0;
    let studentAttendance = 0;

    //formula {total bonus} = {student attendances} / {course lectures} * (5 + {additional bonus})
    for (let i = 0; i < numberStudent; i++) {


        let momentPoint = Number(input[i]) / numberLecture * (5 + additionalBonus);
        
            let studentBonus = Math.round(momentPoint);

        if (Number(input[i]) > studentAttendance) {
            bonusPoint = studentBonus;
            studentAttendance = Number(input[i]);

        }
    }

    console.log(`Max Bonus: ${bonusPoint}.`);
    console.log(`The student has attended ${studentAttendance} lectures.`);

}
bonusScoringSystem([
    '5', '25', '30',
    '12', '19', '24',
    '16', '20']);

bonusScoringSystem([
    '10', '30', '14', '28',
    '23', '27', '28', '15',
    '17', '25', '26', '5',
    '18'
])
