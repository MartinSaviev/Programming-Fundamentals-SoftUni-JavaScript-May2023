function companyUsers(input) {

    let employeeList = {};

    for (let i = 0; i < input.length; i++) {

        let [name, idNumber] = input[i].split(' -> ')

        if (!employeeList.hasOwnProperty(name)) {
            employeeList[name] = [idNumber];

        } else {

            if (!employeeList[name].includes(idNumber)) {
                
                employeeList[name].push(idNumber);
            }
        }
    }

    let sorted = Object.entries(employeeList).sort((a, b) => a[0].localeCompare(b[0]));

    for (const [key] in sorted) {

        console.log(`${sorted[key][0]}`);

        let print = new Set(sorted[key][1]);

        for (const key of print) {

            console.log(`-- ${key}`);

        }

    }
}


companyUsers([

    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'Microsoft -> CC12345',
    'HP -> BB12345'])