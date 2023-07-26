function destinationMapper(input) {

  let pattern = /(=|\/)(?<word>[A-Z][A-Za-z]{2,})(\1)/g
  let words = []
  let points = 0;
  let match = pattern.exec(input);

  while (match) {

    words.push(match.groups.word);
    points += match.groups.word.length

    match = pattern.exec(input);
  }

  console.log(`Destinations: ${words.join(', ')}`);
  console.log(`Travel Points: ${points}`)

}

destinationMapper("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=")
destinationMapper(("ThisIs some InvalidInput"))