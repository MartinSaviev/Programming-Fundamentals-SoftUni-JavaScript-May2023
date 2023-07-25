function worldTour(input) {

    let stops = input.shift();

    for (const line of input) {

        if (line === 'Travel') {

            console.log(`Ready for world tour! Planned stops: ${stops}`);

            break;
        }

        let [command, indexAndString, stringIndex] = line.split(':');

        switch (command) {
            case 'Add Stop':

                let addStop = Number(indexAndString);
                stops = [...stops];
                if (stops[indexAndString]) {
                    
                    stops.splice(addStop, 0, stringIndex);
                    stops = stops.join('');
                    console.log(stops);
                }

                break;
            case 'Remove Stop':

                let startIndex = Number(indexAndString);
                let endIndex = Number(stringIndex);
                let deleteElements = Math.abs(startIndex - endIndex);

                stops = [...stops];
                if (stops[startIndex] && stops[endIndex]) {
                    stops.splice(startIndex, deleteElements + 1);
                    
                }
                stops = stops.join('');
                    console.log(stops);

                break;
            case 'Switch':

                let oldString = indexAndString;
                let newString = stringIndex;
                if (stops.includes(oldString)) {

                    stops = stops.replace(oldString, newString);

                }
                console.log(stops);


                break;
        }
    }
}

worldTour(["Hawai::Cyprys-Greece",
    "Add Stop:7:Rome",
    "Remove Stop:11:16",
    "Switch:Hawai:Bulgaria",
    "Travel"]);

console.log('------------');
worldTour(
    ["Albania:Bulgaria:Cyprus:Deuchland",
        "Add Stop:3:Nigeria",
        "Remove Stop:4:8",
        "Switch:Albania: Azərbaycan",
        "Travel"])

