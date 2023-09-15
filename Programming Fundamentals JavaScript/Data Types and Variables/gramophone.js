function gramophone(band, album, song) {
    let durationInSeconds, rotations;

    durationInSeconds = (album.length * band.length) * song.length / 2;
    rotations = durationInSeconds / 2.5;
    console.log(`The plate was rotated ${Math.ceil(rotations)} times.`);

}

gramophone('Black Sabbath', 'Paranoid','War Pigs')
gramophone('Rammstein', 'Sehnsucht','Engel')