function schoolGrades(input) {

    let objects = {};

    for (const line of input) {
        let [name, ...grades] = line.split(' ');
        grades = grades.map(Number);

        if (!objects.hasOwnProperty(name)) {
            objects[name] = grades;
        } else {
            objects[name] = objects[name].concat(grades);
        }
    }

    const sortedNames = Object.keys(objects).sort();

    for (const name of sortedNames) {
        const grades = objects[name];
        const sum = grades.reduce((total, grade) => total + grade, 0);
        const average = sum / grades.length;
        console.log(`${name}: ${average.toFixed(2)}`);
    }
}

schoolGrades([
    'Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6'
]);