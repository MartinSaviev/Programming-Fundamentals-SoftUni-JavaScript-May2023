function loadingBar(number) {

    let repeatPoint = '.'.repeat(10 - (number / 10))
    let repeatPercent = '%'.repeat(10 - repeatPoint.length);

    if (number === 100) {

        console.log('100% Complete!');

    } else {

        console.log(`${number}% [${repeatPercent}${repeatPoint}]`);
        console.log('Still loading...');
    }
}