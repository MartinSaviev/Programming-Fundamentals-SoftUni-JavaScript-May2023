function distinctArray(arr) {

    
    let removeDuplicates = arr.filter((elem, index) => arr.indexOf(elem) === index);
     
    console.log(removeDuplicates.join(' '));
}