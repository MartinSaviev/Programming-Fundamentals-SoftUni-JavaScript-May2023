function extractFile(input) {

    let lastIndex = input.lastIndexOf('\\');
    let lastStopIndex = input.lastIndexOf('.');

    let fileName = input.substring(lastIndex + 1, lastStopIndex);

    let extension = input.substring(lastStopIndex + 1);

    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${extension}`);

}

extractFile('C:\\Internal\\training-internal\\Template.pptx')