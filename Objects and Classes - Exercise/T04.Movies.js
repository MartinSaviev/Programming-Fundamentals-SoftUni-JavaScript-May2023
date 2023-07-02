function film(input) {

    let allMovies = [];

    input.forEach(moveList => {

        if (moveList.includes('addMovie ')) {

            let name = moveList.split('addMovie ')[1];

            allMovies.push({name:name});

        } else if (moveList.includes('directedBy')) {

            let [movie, director] = moveList.split(' directedBy ');
            let existingMovie = allMovies.find(el => el.name === movie)
            if (existingMovie) {

                existingMovie.director = director;

            }

        } else if (moveList.includes('onDate')) {

            let [movie, date] = moveList.split(' onDate ');

            let existingMovie = allMovies.find(el => el.name === movie);

            if (existingMovie) {

                existingMovie.date = date;
            }
        }

    });

    for (const key in allMovies) {

        if (allMovies[key].name && allMovies[key].date && allMovies[key].director) {

            console.log(JSON.stringify(allMovies[key]));
        }
    }
}

film([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
]);

console.log('---------------');
film([
    'addMovie The Avengers',
    'addMovie Superman',
    'The Avengers directedBy Anthony Russo',
    'The Avengers onDate 30.07.2010',
    'Captain America onDate 30.07.2010',
    'Captain America directedBy Joe Russo'
]
)
