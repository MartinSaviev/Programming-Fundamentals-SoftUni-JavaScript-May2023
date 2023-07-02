function addressBook(input) {

    let addressBook = {};


    for (const phoneLine of input) {

        let [name, address] = phoneLine.split(':');

        addressBook[name] = address;
    }

    let entries = Object.entries(addressBook);

    entries.sort(([keyA,valueA], [keyB,valueB]) => keyA.localeCompare(keyB));

    for (const line of entries) {

        let [name, address] = [...line]

        console.log(`${name} -> ${address}`);
    }

}
addressBook(['Tim:Doe Crossing',
    'Bill:Nelson Place',
    'Peter:Carlyle Ave',
    'Bill:Ornery Rd']
)
console.log('--------------');

addressBook(['Bob:Huxley Rd',
'John:Milwaukee Crossing',
'Peter:Fordem Ave',
'Bob:Redwing Ave',
'George:Mesta Crossing',
'Ted:Gateway Way',
'Bill:Gateway Way',
'John:Grover Rd',
'Peter:Huxley Rd',
'Jeff:Gateway Way',
'Jeff:Huxley Rd'])