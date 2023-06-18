function convert(input) {

    let jsonToObject = JSON.parse(input);

    for (const key of Object.keys(jsonToObject)) {

        console.log(`${key}: ${jsonToObject[key]}`);
    }

}
convert('{"name": "George", "age": 40, "town": "Sofia"}'
)