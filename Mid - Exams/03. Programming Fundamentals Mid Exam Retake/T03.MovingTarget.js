function movingTarget(array) {

    let targets = array.shift().split(' ').map(x => Number(x));

    let commandsLine = array.shift();
    let splitCommands = commandsLine.split(' ');

    let command = splitCommands[0];
    let index = Number(splitCommands[1]);
    let power = Number(splitCommands[2]);

    while (command !== 'End') {

        switch (command) {
            case 'Shoot':

                if (targets[index]) {

                    targets[index] -= power;

                    if (targets[index] <= 0) {
                        targets.splice(index, 1);
                    }
                }

                break;

            case 'Add':
                if (targets[index]) {
                    targets.splice(index, 0, power);

                } else {
                    console.log("Invalid placement!");
                }
                break;
            case 'Strike':

                if (targets[index - power] && targets[index + power]) {

                    let bombIndex = Math.max(0, index - power)
                    targets.splice(bombIndex, power * 2 + 1)

                } else {
                    console.log("Strike missed!");

                }
                break;

        }


        commandsLine = array.shift();
        splitCommands = commandsLine.split(' ');
        command = splitCommands[0];
        index = Number(splitCommands[1]);
        power = Number(splitCommands[2]);

    }
    console.log(targets.join('|'));

}

movingTarget(["52 74 23 44 96 110",
    "Shoot 5 10",
    "Shoot 1 80",
    "Strike 2 1",
    "Add 22 3",
    "End"])
console.log('---------');

movingTarget(["1 2 3 4 5",
    "Strike 1 1",
    "End"])


