function repeatingChars(text) {

    let output = text[0]
    let textLength = text.length;

    for (let i = 1; i < textLength; i++) {


        let currEl = text[i];
        let prevEl = text[i - 1];

        if (currEl !== prevEl) {
            output += currEl;
        }
    }
    console.log(output);
}
repeatingChars('aaaaabbbbbcdddeeeedssaa')
