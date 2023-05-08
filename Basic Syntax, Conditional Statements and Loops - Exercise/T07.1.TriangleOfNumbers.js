function triangle(number) {

    for (let i = 1; i <= number; i++) {

        let curr = [];
        for (let z = 1; z <= i; z++) {
           
            curr.push(i)
           
        }

        console.log(curr.join(" "));
        
    }

}