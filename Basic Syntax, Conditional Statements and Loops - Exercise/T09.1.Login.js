function password(input) {
    let user = input.shift();
    let index = 0;
    let checkUser = input[index];
    checkUser = checkUser.split("").reverse().join("");
    index++;

    let counter = 0;
    while (user != checkUser) {
  
        counter++;
        if (counter === 4) {
            console.log(`User ${user} blocked!`);
            break;
        }
        console.log("Incorrect password. Try again.");

        checkUser = input[index];
        index++;
        checkUser = checkUser.split("").reverse().join("");
    }
    if (user === checkUser) {
        console.log(`User ${user} logged in.`);

    }
}