function specialNumbers(n) {
    for (let i = 1; i <= n; i++) {
        let digits = i.toString().split("").map(Number);
        let sum = digits.reduce((a, b) => a + b);

        let isSpecial = ''
        if (sum === 5) {
            isSpecial = 'True';
        } else if (sum === 7) {
            isSpecial = 'True';
        } else if (sum === 11) {
            isSpecial = 'True';
        } else {
            isSpecial = 'False';
        }

        console.log(`${i} -> ${isSpecial}`);
    }
}