function validPassword(input) {
    let n = Number(input.shift());

    let pattern = /^([\x20-\x7E]+)>(?<numbers>\d+)\|(?<lowerCase>[a-z]+)\|(?<upperCase>[A-Z]+)\|(?<symbols>[\x20-\x7E]+)<\1$/g;

    for (let i = 0; i < n; i++) {
        let match = pattern.exec(input[i]);

        if (match) {
            console.log(`Password: ${match.groups.numbers}${match.groups.lowerCase}${match.groups.upperCase}${match.groups.symbols}`);
        } else {
            console.log('Try another password!');
        }
    }
}

validPassword([
    "5",
    "aa>111|mqu|BAU|mqu<aa",
    "()>111!aaa!AAA!^&*<()",
    "o>088|abc|AAA|***<o",
    "asd>asd|asd|ASD|asd<asd",
    "*>088|zzzz|ZzZ|123<*"
]);
console.log('-----');

validPassword([
    "3",
    "##>00|no|NO|!!!?<###",
    "##>123|yes|YES|!!!<##",
    "$$<111|noo|NOPE|<<>$$"
]);



