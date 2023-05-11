function characterInRage(firstCharacter, secondCharacter) {

    let firsChar = firstCharacter.charCodeAt(0);
    let secondChar = secondCharacter.charCodeAt(0);

    if (firsChar < secondChar) {
        let currChar = secondChar;
        secondChar = firsChar;
        firsChar = currChar;
    }
    let array = [];
    for (let i = secondChar + 1; i < firsChar; i++) {

        let char = String.fromCharCode(i);
        array.push(char);
    }

    console.log(array.join(" "));
}