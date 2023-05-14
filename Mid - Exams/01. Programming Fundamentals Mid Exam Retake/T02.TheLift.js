function theLift(input) {

    let numberPeople = Number(input.shift());
    let wagonMaxPeople = input.shift().split(' ').map(Number);

    for (let i = 0; i < wagonMaxPeople.length; i++) {

        if (wagonMaxPeople[i] !== 4 || wagonMaxPeople[i] === numberPeople) {
            let maxPassenger = 4;
            let currPeopleInWagon = wagonMaxPeople[i];
            let passengerAddInWagon = maxPassenger - currPeopleInWagon;

            if (numberPeople >= passengerAddInWagon) {
                wagonMaxPeople[i] += passengerAddInWagon;
                numberPeople -= passengerAddInWagon;

            } else {
                wagonMaxPeople[i] += numberPeople;
                numberPeople = 0;

            }
        }
    }
    if (wagonMaxPeople[wagonMaxPeople.length - 1] === 4 && numberPeople > 0) {
        console.log(`There isn't enough space! ${numberPeople} people in a queue!`);
        console.log(wagonMaxPeople.join(' '));
    } else if (wagonMaxPeople[wagonMaxPeople.length - 1] < 4) {
        console.log(`The lift has empty spots!`);
        console.log(wagonMaxPeople.join(' '));
    } else {
        console.log(wagonMaxPeople.join(' '));
    }
}