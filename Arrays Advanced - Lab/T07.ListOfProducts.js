function listProducts(array) {
    
    let sortArray = array.sort()
    
    for (let i = 0; i < sortArray.length; i++) {

        console.log(`${i+1}.${array[i]}`);
        
    }
}