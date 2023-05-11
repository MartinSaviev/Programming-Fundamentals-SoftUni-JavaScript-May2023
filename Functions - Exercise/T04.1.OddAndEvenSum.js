function evenAndOddSum(number) {

    function evenSum(elements) {

        let array = elements.toString().split('').map(Number);
        evenSum = array.filter(x => x % 2 === 0).reduce((a, b) => a + b, 0);
        return evenSum;
    }

    let evenEl = evenSum(number);

    function oddSum(elements) {

        let array = elements.toString().split('').map(Number);
        oddSum = array.filter(x => x % 2 === 1).reduce((a, b) => a + b, 0);
        return oddSum;
    }

    let oddEl = oddSum(number);

    function print() {

        console.log(`Odd sum = ${oddEl}, Even sum = ${evenEl}`);
    }
    print();

}