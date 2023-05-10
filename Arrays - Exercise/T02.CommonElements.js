function compareArrays(arr1, arr2) {
    let commonElements = arr1.filter(element => arr2.includes(element));
    console.log(commonElements.join('  '));
}