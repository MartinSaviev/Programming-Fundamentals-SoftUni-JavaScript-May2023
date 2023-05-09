function echoType(input) {

    let type = typeof (input);

    if (type === 'string') {
        console.log(type);
        console.log(input);
    } else if (type === 'number') {
        console.log(type);
        console.log(input);
    } else {
        console.log(type);
        console.log('Parameter is not suitable for printing');
    }

}