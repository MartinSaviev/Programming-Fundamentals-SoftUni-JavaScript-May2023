function thePianist(input) {

    let numberPieces = input.shift();

    let pieces = {};

    for (let i = 0; i < numberPieces; i++) {

        let [namePiece, composer, version] = input.shift()
            .split('|');

        pieces[namePiece] = {

            composer: composer,
            version: version,

        }
    }

    for (const line of input) {


        if (line === 'Stop') {

            break;
        }

        let [command, piece, composerAndNewVersion, version] = line.split('|');

        switch (command) {
            case 'Add':
                let composer = composerAndNewVersion;

                if (!pieces.hasOwnProperty(piece)) {

                    pieces[piece] = { composer: composer, version: version };
                    console.log(`${piece} by ${composer} in ${version} added to the collection!`);

                } else {

                    console.log(`${piece} is already in the collection!`);
                }

                break;
            case 'Remove':

                if (pieces.hasOwnProperty(piece)) {

                    console.log(`Successfully removed ${piece}!`);

                    delete (pieces[piece]);

                } else {

                    console.log(`Invalid operation! ${piece} does not exist in the collection.`);
                }

                break;
            case 'ChangeKey':

                let newVersion = composerAndNewVersion;

                if (pieces.hasOwnProperty(piece)) {

                    pieces[piece].version = newVersion

                    console.log(`Changed the key of ${piece} to ${newVersion}!`);

                } else {

                    console.log(`Invalid operation! ${piece} does not exist in the collection.`);

                }

                break;
        }

    }

    for (const piece in pieces) {

        console.log(`${piece} -> Composer: ${pieces[piece].composer}, Key: ${pieces[piece].version}`);
    }
}


thePianist([
    '3',
    'Fur Elise|Beethoven|A Minor',
    'Moonlight Sonata|Beethoven|C# Minor',
    'Clair de Lune|Debussy|C# Minor',
    'Add|Sonata No.2|Chopin|B Minor',
    'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
    'Add|Fur Elise|Beethoven|C# Minor',
    'Remove|Clair de Lune',
    'ChangeKey|Moonlight Sonata|C# Major',
    'Stop'
])