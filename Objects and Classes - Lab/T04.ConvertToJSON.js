function convertToJSON(name, lastName, hairColor) {

    let info = {
        name: name,
        lastName: lastName,
        hairColor: hairColor
    }

    let convertToJSONString = JSON.stringify(info);
    console.log(convertToJSONString);
} 

convertToJSON('George', 'Jones',
    'Brown')