function memoryGame(input) {

    let sequence = input.shift().split(" ");
    let commands = input.slice();

    let counter = 0;
    let gameOver = false;

    while (commands.length > 0) {
        let command = commands.shift();

        if (command === "end") {
            break;
        }

        counter++;
        let [index1, index2] = command.split(" ").map(Number);

        if (
            index1 === index2 || index1 < 0 || index2 < 0 || index1 >= sequence.length || index2 >= sequence.length) {
            let middleIndex = Math.floor(sequence.length / 2);
            sequence.splice(middleIndex, 0, `-${counter}a`, `-${counter}a`);
            console.log("Invalid input! Adding additional elements to the board");
        } else if (sequence[index1] === sequence[index2]) {
            let element = sequence[index1];
            sequence = sequence.filter((el, i) => i !== index1 && i !== index2);
            console.log(`Congrats! You have found matching elements - ${element}!`);
        } else {
            console.log("Try again!");
        }

        if (sequence.length === 0) {
            
            gameOver = true;
            break;
        }
    }

    if (gameOver) {
        console.log(`You have won in ${counter} turns!`);
    } else {
        console.log("Sorry you lose :(");
        console.log(sequence.join(" "));
    }
}

memoryGame([
    "1 1 2 2 3 3 4 4 5 5",
    "1 0",
    "-1 0",
    "1 0",
    "1 0",
    "1 0",
    "end"
])

console.log('----------')

memoryGame([
    "a 2 4 a 2 4",
    "0 3",
    "0 2",
    "0 1",
    "0 1",
    "end"
])


