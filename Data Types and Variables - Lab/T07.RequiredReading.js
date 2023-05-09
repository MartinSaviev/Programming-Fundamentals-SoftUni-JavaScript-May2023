function readingBook(numberPages,pagesReadByOneHour,numberDays) {

    let totalTime = numberPages/pagesReadByOneHour;
    let hoursPerDay = totalTime/numberDays;
    console.log(hoursPerDay);
    
}