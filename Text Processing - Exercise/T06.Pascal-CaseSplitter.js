function caseSplitter(input) {

    
    const arr = input.split(/(?=[A-Z])/).join(', ');

    console.log(arr);

}
caseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan')