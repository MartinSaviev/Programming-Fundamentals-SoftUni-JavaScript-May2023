function reversedChars(charOne, charTwo, charTree) {

    let text = charOne + charTwo + charTree ;
    let split = text.split('').reverse().join(' ');

    console.log(split);
}
