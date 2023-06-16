function gameAccount(input) {

    let gameAccount = input.shift().split(' ');

    for (const commandLine of input) {

        if (commandLine === 'Play') {

            break;
        }

        let [command, game] = commandLine.split(' ');
        let index;

        switch (command) {
            case 'Install':
                if (!gameAccount.includes(game)) {

                    gameAccount.push(game);

                }
                break;

            case 'Uninstall':

                if (gameAccount.includes(game)) {

                    index = gameAccount.indexOf(game);

                    gameAccount.splice(index, 1);
                }

                break;

            case 'Update':

                if (gameAccount.includes(game)) {

                    index = gameAccount.indexOf(game);

                    let lastPosition = gameAccount.splice(index, 1)[0];
                    gameAccount.push(lastPosition);
                }

                break;

            case 'Expansion':

                let [newGame, Expansion] = game.split('-');

                if (gameAccount.includes(newGame)) {

                    index = gameAccount.indexOf(newGame);

                    let newExpansionGame = newGame + ':' + Expansion;

                    gameAccount.splice(index + 1, 0, newExpansionGame)[0];

                }

                break;

        }

    }

    console.log(gameAccount.join(' '));

}

gameAccount(['CS WoW Diablo',
    'Install LoL',
    'Uninstall WoW',
    'Update Diablo',
    'Expansion CS-Go',
    'Play!'])
console.log('----------------');
gameAccount(['CS WoW Diablo',
    'Uninstall XCOM',
    'Update PeshoGame',
    'Update WoW',
    'Expansion Civ-V',
    'Play!']
)

