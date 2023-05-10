function arrayRotation(array, rotation) {

    
    for (let i = 0; i < rotation; i++) {

        let currEl = array.shift();
        array.push(currEl);
    }

    console.log(array.join(' '));
}