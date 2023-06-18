function phoneShop(input) {

    let phoneLists = input.shift().split(', ');

    for (const phoneLine of input) {

        if (phoneLine === 'End') {
            break;
        }

        let [command, phone] = phoneLine.split(' - ');

        switch (command) {
            case 'Add':

                if (!phoneLists.includes(phone)) {

                    phoneLists.push(phone);
                }
                break;

            case 'Remove':

                if (phoneLists.includes(phone)) {

                    let indexRemove = phoneLists.indexOf(phone);
                    phoneLists.splice(indexRemove, 1);
                }
                break;

            case 'Bonus phone':

                let [oldPhone, newPhone] = phone.split(':');

                let indexOldPhone = phoneLists.indexOf(oldPhone);
                if (phoneLists.includes(oldPhone)) {

                    phoneLists.splice(indexOldPhone + 1, 0, newPhone)
                }
                break;
                
            case 'Last':

                if (phoneLists.includes(phone)) {

                    let indexChangeToLastPosition = phoneLists.indexOf(phone);

                    let addLastPosition = phoneLists.splice(indexChangeToLastPosition, 1)[0]
                    phoneLists.push(addLastPosition);
                }
                break;
        }
    }

    console.log(phoneLists.join(', '));

}

phoneShop(["SamsungA50, MotorolaG5, IphoneSE",

    "Add - Iphone10",

    "Remove - IphoneSE",

    "End"])
console.log('------------------');

phoneShop(["HuaweiP20, XiaomiNote",

    "Remove - Samsung",

    "Bonus phone - XiaomiNote:Iphone5",

    "End"])

console.log('------------');

phoneShop(["SamsungA50, MotorolaG5, HuaweiP10",

    "Last - SamsungA50",

    "Add - MotorolaG5",

    "End"])
