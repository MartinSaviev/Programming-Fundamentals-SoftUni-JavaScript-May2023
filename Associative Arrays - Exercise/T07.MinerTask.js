function minerTask(input) {

    let miner = {};

    for (let i = 0; i < input.length; i += 2) {

        let name = input[i];
        let value = Number(input[i + 1]);

        if (!miner.hasOwnProperty(name)) {
            miner[name] =value;
        }else{
            miner[name] += value;
        }

    }

    for (const name in miner) {

        console.log(`${name} -> ${miner[name]}`);
    }

}
minerTask([
    'gold',
    '155',
    'silver',
    '10',
    'copper',
    '17',
    'gold',
    '15'
])