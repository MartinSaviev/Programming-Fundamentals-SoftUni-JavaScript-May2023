function song(input) {

    let n = input.shift();

    let lastElement = input.splice(-1)[0]

    for (let i = 0; i < n; i++) {

        while (i < n) {

            [typeList, nameSong, timeSong] = input[i].split('_');

            class Song {
                constructor(typeList, nameSong) {

                    this.typeList = typeList;
                    this.nameSong = nameSong;
                    
                };
            }

            let song = new Song(typeList, nameSong);

            if (song.typeList === lastElement) {

                console.log(song.nameSong);

            } else if (lastElement === 'all')

                console.log(song.nameSong);

            break;
        }

    }

}


song([4,
    'favourite_DownTown_3:14',
    'listenLater_Andalouse_3:24',
    'favourite_In To The Night_3:58',
    'favourite_Live It Up_3:48',
    'listenLater']
    
)
