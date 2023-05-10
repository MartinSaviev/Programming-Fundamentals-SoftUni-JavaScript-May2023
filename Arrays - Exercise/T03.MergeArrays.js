function margeArray(arr1, arr2) {


    let mergeArray = [];


    for (let i = 0; i < arr1.length; i++) {

        if (i % 2 == 0) {
            mergeArray.push(Number(arr1[i])+Number(arr2[i])); 
        }else {
            mergeArray.push((arr1[i]+arr2[i])); 
        }

    }

console.log(mergeArray.join(' - '));

}