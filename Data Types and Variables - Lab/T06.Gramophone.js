function gramophone(nameBand,album,song) {

    let rotations = Math.ceil(((album.length * nameBand.length) * song.length / 2)/2.5);
  
    console.log(`The plate was rotated ${rotations} times.`)
      
  }