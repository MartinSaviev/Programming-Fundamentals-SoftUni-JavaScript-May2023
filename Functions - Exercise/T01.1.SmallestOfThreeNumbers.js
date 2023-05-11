function smallestNumber(first, second, third) {

    let array = [first, second, third];
    let smallNumber = array.sort((a, b) =>a -b).slice(0,1);

    console.log(smallNumber.join(" "));
 
}