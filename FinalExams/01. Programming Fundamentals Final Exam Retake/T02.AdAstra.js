function adAstra(input) {

    let pattern = /(\||\#)(?<name>\w+|\w+ \w+)\1(?<day>[0-9]{2})\/(?<month>[0-9]{2})\/(?<year>[0-9]{2})\1(?<calories>[0-9]+)\1/g

    let matchesAllCalories = input[0].matchAll(pattern);
    let matchesLine = input[0].matchAll(pattern);

    let allCalories = 0;
    
    for (const matchFood of matchesAllCalories) {
        
        allCalories += Number(matchFood.groups.calories);
   
    }
    
    let caloriesForDays = parseInt(allCalories / 2000);
    console.log(`You have food to last you for: ${caloriesForDays} days!`);

    for (const matchLine of matchesLine) {
        
        console.log(`Item: ${matchLine.groups.name}, Best before: ${matchLine.groups.day}/${matchLine.groups.month}/${matchLine.groups.year}, Nutrition: ${matchLine.groups.calories}`);
        
    }
}

adAstra([
    '#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|']);
console.log('------');
adAstra([ '$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|' ]);
