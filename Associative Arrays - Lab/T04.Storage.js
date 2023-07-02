function storage(input) {

    let storage = {};

    for (const element of input) {

        let [name, value] = element.split(' ');

        if (!storage.hasOwnProperty(name)) {
            storage[name] = Number(value);

        } else {
            storage[name] += Number(value);

        }

    }
    for (const key in storage) {
        console.log(`${key} -> ${storage[key]}`);
    }
}


storage(['tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40']
)