function meetings(input) {

    let meetings = {};

    for (const days of input) {

        let [day, name] = days.split(' ');

        if (!meetings.hasOwnProperty(day)) {

            meetings[day] = name;
            console.log(`Scheduled for ${day}`);


        } else {

            console.log(`Conflict on ${day}!`);
            
        }


    }

    for (const name in meetings) {

        console.log(`${name} -> ${meetings[name]}`);
        
    }

}

meetings(['Monday Peter',
    'Wednesday Bill',
    'Monday Tim',
    'Friday Tim']
)