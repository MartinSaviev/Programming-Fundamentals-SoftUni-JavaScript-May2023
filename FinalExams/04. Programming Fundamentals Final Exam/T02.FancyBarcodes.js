function barCode(input) {

    let pattern = /(@#{1,})(?<word>[A-Z][A-Za-z(?<digits>\d)]{4,}[A-Z])(@#{1,})/g;
    let wordPattern = /\d/g

    let barCodeCount = Number(input.shift());

    for (let i = 0; i < barCodeCount; i++) {

        let allMatches = [...input[i].matchAll(pattern)];

        if (allMatches.length === 0) {

            console.log('Invalid barcode');
            
        }
        
        for (const match of allMatches) {


            if (match) {
                
                let digits = match.groups.word.match(wordPattern);
                
                if (digits === null) {
                    digits = '00';
                    console.log(`Product group: ${digits}`);
                } else {
                    let sum = '';
                    for (let i = 0; i < digits.length; i++) {
                        
                        sum = sum + digits[i]
                    }
                    console.log(`Product group: ${sum}`);
                }
            } 
            
        }
    }
}

// barCode((["3",
//     "@#FreshFisH@#",
//     "@###Brea0D@###",
//     "@##Che4s6E@##"])
// )

// console.log('-----------------');

barCode(["6",
    "@###Val1d1teM@###",
    "@#ValidIteM@#",
    "##InvaliDiteM##",
    "@InvalidIteM@",
    "@#Invalid_IteM@#",
    "@#ValiditeM@#"])

