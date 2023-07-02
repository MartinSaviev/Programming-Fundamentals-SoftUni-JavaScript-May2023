function employees(input) {

    for (const key in input) {

        let name = input[key];
        let description = input[key].length;

        class Employee {

            constructor(name, description) {

                this.Name = name;
                this['Personal Number'] = description;

            }
        };

        let employee = new Employee(name, description);

        console.log(Object.entries(employee).map(([key, value]) => `${key}: ${value}`).join(' -- '));
    }
}

employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
])