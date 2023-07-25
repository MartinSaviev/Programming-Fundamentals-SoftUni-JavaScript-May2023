function mirrorWordProblem(input) {

    let pattern = /(@{1}|\#{1})(?<firstWord>[a-zA-z]{3,})\1\1(?<secundWord>[a-zA-Z]{3,})\1/g

    let matchCount = 0;
    let mirrorWords = [];

    for (const line of input) {

        let matchAll = line.matchAll(pattern);

        for (const match of matchAll) {

            let firstWord = match.groups.firstWord;
            let secundWord = match.groups.secundWord;

            let firstWordLength = firstWord.length;
            let secundWordLength = secundWord.length;

            let reverseWord = secundWord.split('').reverse().join('')

            if (firstWord === reverseWord && firstWordLength === secundWordLength) {

                mirrorWords.push(`${firstWord} <=> ${secundWord}`)
            }

            if (match.length > 2) {

                matchCount++;
            }
        }

        if (matchCount > 0) {
            console.log(`${matchCount} word pairs found!`);

            if (mirrorWords.length > 0) {
                console.log('The mirror words are:');
                console.log(mirrorWords.join(', '));

            } else {
                console.log('No mirror words!');

            }


        } else {
            console.log('No word pairs found!');
            console.log('No mirror words!');

        }
    }
}

mirrorWordProblem([
    '@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r'
])
console.log('------');

mirrorWordProblem(['#po0l##l0op# @bAc##cAB@ @LM@ML@ #xxxXxx##xxxXxx# @aba@@ababa@']);

console.log('--------');

mirrorWordProblem(['#lol#lol# @#God@@doG@# #abC@@Cba# @Xyu@#uyX#'])
