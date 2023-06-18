function blackList(input) {


    let friends = input.shift().split(', ');

    let counterBlacklisted = 0;
    let counterLostNames = 0;

    for (const commandLine of input) {

        if (commandLine === 'Report') {
            break;
        }

        let [command, nameOrIndex, newName] = commandLine.split(" ")

        switch (command) {
            case 'Blacklist':

                if (friends.includes(nameOrIndex)) {

                    let blackListIndex = friends.indexOf(nameOrIndex);
                    console.log(`${nameOrIndex} was blacklisted.`);
                    friends[blackListIndex] = 'Blacklisted'
                    counterBlacklisted++;
                 
                } else {
                    console.log(`${nameOrIndex} was not found.`);
                }

                break;
            case 'Error':

                let errorIndex = Number(nameOrIndex);

                if (friends.hasOwnProperty(errorIndex)) {

                    if (friends[errorIndex] === 'Blacklisted') {
                        continue;
                    }

                    if (friends[errorIndex] !== 'Lost') {

                        let nameError = friends[errorIndex];

                        friends[errorIndex] = 'Lost'

                        console.log(`${nameError} was lost due to an error.`);
                        counterLostNames++;
                    }
                  
                }

                break;

            case 'Change':

                let index = Number(nameOrIndex);

                if (friends.hasOwnProperty(index)) {

                    let oldName = friends[index];
                    friends[nameOrIndex] = newName;

                    console.log(`${oldName} changed his username to ${newName}.`);

                }

                break;
        }
    }

    console.log(`Blacklisted names: ${counterBlacklisted}`);
    console.log(`Lost names: ${counterLostNames}`);
    console.log(friends.join(' '));

}

blackList(["Mike, John, Eddie",

    "Blacklist Mike",

    "Error 0",

    "Report"])

console.log('----------');

blackList(["Mike, John, Eddie, William", "Error 3", "Error 3", "Change 0 Mike123", "Report"])

console.log('---------');


blackList(["Mike, John, Eddie, William",

"Blacklist Maya",

"Error 1",

"Change 4 George",

"Report"])
