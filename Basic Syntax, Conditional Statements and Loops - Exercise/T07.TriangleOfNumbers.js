function triangleNumbers(num) {

    for (let i = 1; i <= num; i++) {

        let numLines = '';

        for (let z = 1; z <= i; z++) {

            numLines += i + " ";
        }

        console.log(numLines);
    }
}
