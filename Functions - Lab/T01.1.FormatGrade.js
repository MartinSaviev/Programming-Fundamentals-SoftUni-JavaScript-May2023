function formatGrade(grade) {

    grade = grade.toFixed(2);
    let description = '';

    if (grade < 3.00) {
        grade = parseInt(grade);
        description = 'Fail';
    } else if (grade < 3.50) {
        description = 'Poor';
    } else if (grade < 4.50) {
        description = 'Good';
    } else if (grade < 5.50) {
        description = 'Very good';
    } else {
        description = 'Excellent';
    }
    console.log(`${description} (${grade})`);

}