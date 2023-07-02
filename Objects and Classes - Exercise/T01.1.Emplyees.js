function employees(input) {

    let employeesList = {};

    input.forEach(element => {

        employeesList[element] = element.length;

    });

    for (const key in employeesList) {

        console.log(`Name: ${key} -- Personal Number: ${employeesList[key]}`);
    }
}

employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
])