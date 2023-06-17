function reverseArray(n, Numbers) {

    let currArray = [];
    for (let i = 0; i < n; i++) {

        currArray.push(Numbers[i]);

    }

    currArray.reverse();
    console.log(currArray.join(' '));

}