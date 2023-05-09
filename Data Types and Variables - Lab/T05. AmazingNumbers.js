function amazing(number) {

    let sum = 0;
    let printNumber = number;
    for (let i = 0; i < number; i++) {

        let currNumber = number % 10;
        number = Number.parseInt(number / 10);
        sum += currNumber;
        i--;
    }
    let result = sum.toString().includes('9');
    console.log(result ?`${printNumber} Amazing? True`:`${printNumber} Amazing? False`);

}