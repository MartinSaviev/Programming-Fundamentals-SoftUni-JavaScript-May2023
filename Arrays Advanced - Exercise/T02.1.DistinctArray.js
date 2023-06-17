function distinctArray(array) {

    let distinctArray = [];

    for (let i = 0; i < array.length; i++) {
        
        if (!distinctArray.includes(array[i])) {
            distinctArray.push(array[i]);
        }
    }
    console.log(distinctArray.join(" "));
}