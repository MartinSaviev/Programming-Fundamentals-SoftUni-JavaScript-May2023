function bombNumber(array, bombAndPower) {

   let [specialNum,power] = bombAndPower;
    
    let index = array.indexOf(specialNum);

    while (index != -1) {

        let bombIndex = Math.max(0,index - power)

        array.splice(bombIndex, power * 2 + 1)
        index = array.indexOf(specialNum);
    }

    console.log(array.reduce((a, b) => a + b, 0));

}
bombNumber([1, 2, 2, 4, 2, 2, 2, 9],[4, 2])