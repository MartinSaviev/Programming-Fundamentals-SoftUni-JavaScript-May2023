function worldTour(input) {

    let text = input.shift();

    while (true) {

        let [command, indexOrString, endIndexNewString] = input.shift().split(':');

        if (command === 'Travel') {
            console.log(`Ready for world tour! Planned stops: ${text}`);
            break;
        }

        switch (command) {

            case 'Add Stop':

                let index = Number(indexOrString);
                let stop = endIndexNewString;

                if (text.hasOwnProperty(index)) {

                    let firstHalfText = text.substring(0, index);
                    let secundHalfText = text.substring(index);

                    text = firstHalfText + stop + secundHalfText;

                }
                console.log(text);

                break;

            case 'Remove Stop':

                let startIndex = Number(indexOrString);
                let endIndex = Number(endIndexNewString);


                if (text.hasOwnProperty(startIndex) && text.hasOwnProperty(endIndex)) {

                    let firstHalfString = text.substring(0, startIndex);
                    let secundHalfString = text.substring(endIndex + 1);


                    text = firstHalfString + secundHalfString;

                }

                console.log(text);

                break;


            case 'Switch':

                let oldString = indexOrString;
                let newString = endIndexNewString;

                if (text.includes(oldString)) {

                    text = text.replace(oldString, newString)

                }

                console.log(text);

                break;
        }

    }
}

worldTour(["Hawai::Cyprys-Greece",
    "Add Stop:7:Rome",
    "Remove Stop:31:16",
    "Switch:Hawai:Bulgaria",
    "Travel"])
console.log('---------');

worldTour(["Albania:Bulgaria:Cyprus:Deuchland",
    "Add Stop:3:Nigeria",
    "Remove Stop:4:8",
    "Switch:Albania: Azərbaycan",
    "Travel"])
