function activationKeys(input) {

    let activationKey = input.shift();

    for (const line of input) {

        if (line === 'Generate') {
            console.log(`Your activation key is: ${activationKey}`);
            break;
        }

        let [command, substringIndex, index, indexEnd] = line.split('>>>');

        switch (command) {

            case 'Contains':
                if (activationKey.includes(substringIndex)) {
                    console.log(`${activationKey} contains ${substringIndex}`);
                } else {
                    console.log('Substring not found!');
                }
                break;

            case 'Flip':
                let start = Number(index);
                let end = Number(indexEnd);
                let upperOrLower = substringIndex;

                if (start >= 0 && start < activationKey.length && end >= 0 && end < activationKey.length) {
                    let substring = activationKey.substring(start, end);
                    if (upperOrLower === 'Upper') {
                        let newString = substring.toUpperCase();
                        activationKey = activationKey.substring(0, start) + newString + activationKey.substring(end);
                    } else if (upperOrLower === 'Lower') {
                        let newString = substring.toLowerCase();
                        activationKey = activationKey.substring(0, start) + newString + activationKey.substring(end);
                    }
                }

                console.log(activationKey);
                break;

            case 'Slice':
                let endIndex = Number(index);
                let startIndex = Number(substringIndex);

                if (startIndex >= 0 && startIndex < activationKey.length && endIndex >= 0 && endIndex < activationKey.length) {
                    activationKey = activationKey.substring(0, startIndex) + activationKey.substring(endIndex);
                }

                console.log(activationKey);
                break;
        }


    }
}

activationKeys(["abcdefghijklmnopqrstuvwxyz",
    "Slice>>>2>>>6",
    "Flip>>>Upper>>>3>>>14",
    "Flip>>>Lower>>>5>>>7",
    "Contains>>>def",
    "Contains>>>deF",
    "Generate"]);
console.log('-------');
activationKeys(["134softsf5ftuni2020rockz42",
    "Slice>>>3>>>7",
    "Contains>>>-rock",
    "Contains>>>-uni-",
    "Contains>>>-rocks",
    "Flip>>>Upper>>>2>>>8",
    "Flip>>>Lower>>>5>>>11",
    "Generate"]);
