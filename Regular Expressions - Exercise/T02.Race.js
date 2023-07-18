function raceTask(input) {

    let participants = {};

    let racers = input.shift().split(', ')

    for (let i = 0; i < racers.length; i++) {

        let currRacer = racers[i];
        participants[currRacer] = 0;
    }

    let index = 0;

    let patternName = /[A-Za-z]/g;
    let patterDigits = /\d/g;

    let numbers;
    let sumAllNumbers;

    while (input[index] !== 'end of race') {


        let matchesNames = input[index].match(patternName).join('');
        let matchesDigits = input[index].match(patterDigits);

        numbers = matchesDigits.map(Number);
        sumAllNumbers = numbers.reduce((a, b) => a + b);

        if (!participants.hasOwnProperty(matchesNames)) {

            delete (participants[matchesNames])

        } else {

            participants[matchesNames] += sumAllNumbers;
        }

        index++
    }

    let sorting = Object.entries(participants).sort((a, b) => b[1] - a[1]);


    let counter = 1;
    for (const key in sorting) {

        if (counter === 4) {
            break;
        }
        if (counter == 1) {
            console.log(`${counter}st place: ${sorting[key][0]}`);
        } else if (counter == 2) {
            console.log(`${counter}nd place: ${sorting[key][0]}`);
        } else if (counter == 3) {
            console.log(`${counter}rd place: ${sorting[key][0]}`);
        }
        counter++;
    }

}

raceTask(['George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@ ',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
    'end of race'])

