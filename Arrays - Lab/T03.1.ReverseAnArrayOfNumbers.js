function reverseArray(n, Numbers) {

    let currArray = [];
    let reverseArray = [];

    for (let i = 0; i < n; i++) {

        currArray.push(Numbers[i]);
    }
    for (let z = currArray.length - 1; z >= 0; z--) {

        reverseArray.push(Numbers[z]);

    }

    console.log(reverseArray.join(' '));

}