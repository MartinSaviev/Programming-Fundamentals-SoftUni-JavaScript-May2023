function triplesLetters(n) {

    let number = Number(n);

    for (let i = 0; i < number; i++) {
        
        for (let z = 0; z < number; z++) {
           
            for (let y = 0; y < number; y++) {

                let array = [];
                
                let firstLetter = String.fromCharCode(97 + i);
                let secondLetter = String.fromCharCode(97 + z);
                let thirdLetter = String.fromCharCode(97 + y);

                array.push(firstLetter);
                array.push(secondLetter);
                array.push(thirdLetter);

                let text = array.join('');
                console.log(text);
            }
        }

    }

}