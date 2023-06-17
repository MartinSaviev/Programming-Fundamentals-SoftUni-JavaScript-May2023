function sortTwoCriteria(array) {

    let sortArray = array.sort((a, b) => a.length - b.length || a.localeCompare(b));
    
    console.log(sortArray.join('\n'));
}