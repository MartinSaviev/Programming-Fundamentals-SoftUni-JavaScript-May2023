function login(input) {

    let password = input.shift();

    let array = []

    for (let i = 0; i < input.length; i++) {

        array.push(input[i])

    }

    array = array.map(word => word.split('').reverse().join(''));

    index = 0;
    let count = 0;

    while (password !== array[index]) {

        console.log('Incorrect password. Try again.');

        index++;
        count++;

        if (count === 3 && password !== array[index]) {
            console.log(`User ${password} blocked!`);
            return;

        }

    }
    console.log(`User ${password} logged in.`);

}