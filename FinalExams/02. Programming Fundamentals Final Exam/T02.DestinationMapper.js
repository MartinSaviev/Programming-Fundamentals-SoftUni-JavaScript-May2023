function destinationMapper(input) {

    let pattern = /(\=|\/)(?<firstPlace>[A-Za-z]+)\1(\/|=)(?<secundPlace>[A-Za-z]+)\3/g

    let matchDestination = input.matchAll(pattern)
    let firstPlace = '';
    let secundPlace = '';
    let firstPlaceLength = 0;
    let secundPlaceLength = 0;
    let sumLength = 0;

    for (const match of matchDestination) {

        firstPlace = match.groups.firstPlace;
        secundPlace = match.groups.secundPlace;

        firstPlaceLength = firstPlace.length;
        secundPlaceLength = secundPlace.length;

        sumLength = firstPlaceLength + secundPlaceLength;

    }

    if (firstPlaceLength > 0 && secundPlaceLength > 0) {

        console.log(`Destinations: ${firstPlace}, ${secundPlace}`);
        console.log(`Travel Points: ${sumLength}`);
    } else {
        console.log('Destinations:');

        console.log(`Travel Points: ${sumLength}`);


    }
}

destinationMapper("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=")

console.log('--------');

destinationMapper("ThisIs some InvalidInput")
