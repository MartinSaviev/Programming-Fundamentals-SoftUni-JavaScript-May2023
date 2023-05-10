function smallTwoNumbers(input) {

    let sortNumbers = input.sort((a,b)=> a-b);
    let twoNumbers = sortNumbers.slice(0,2);
    console.log(twoNumbers.join(' '));
 
}