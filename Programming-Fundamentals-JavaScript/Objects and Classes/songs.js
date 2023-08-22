function songs(arr) {
    let numberOfSongs, song, songs, typeOfSong;
    class Song {
        constructor(type, name, time) {
            this.type = type;
            this.name = name;
            this.time = time;
        }
        all() {
            console.log(`${this.name}`);
        }
    }
    numberOfSongs = arr.shift();
    typeOfSong = arr.pop();
    songs = [];

    for (i = 0; i < arr.length; i++) {
        [type, name, time] = arr[i].split("_");
        song = new Song(type, name, time);
        if (typeOfSong === "all") {
            song.all();
        } else if (typeOfSong === type) {
            song.all();
        }
    }
}

songs([2,
    'like_Replay_3:15',
    'ban_Photoshop_3:48',
    'all']
    
    
    );