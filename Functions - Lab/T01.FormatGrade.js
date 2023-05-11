function formatGrades(grade) {

    let result = '';
    if (grade < 3.00) {
        result = 'Fail';
    } else if (grade < 3.50) {
        result = 'Poor';
    } else if (grade < 4.50) {
        result = 'Good';
    } else if (grade < 5.50) {
        result = 'Very good';
    } else if (grade >= 5.50) {
        result = 'Excellent';
    }

    if (grade < 3.00) {

        return (`${result} (${parseInt(grade)})`);

    } else {
        
       return (`${result} (${(grade).toFixed(2)})`);
    }
   
}
