function ItunesController() {
  var itunesService = new ItunesService()
  //Do Not Modify the getMusic function
  this.getMusic = function getMusic(e) {
    e.preventDefault();
    var artist = e.target.artist.value;
    itunesService.getMusicByArtist(artist).then(drawSongs); //after get music by artist returns what are you doing with the objects?
  }

  //Start coding here
  function drawSongs(songList) {
    console.log(songList)
    var songElem = document.getElementById("songs")
    var template = ''
    for (let i = 0; i < songList.length; i++) {
      var currentSong = songList[i];
      template +=
        `      
      <div class="col-sm-3 song-box m-1rem pd-1rem centered-text">
      <img class="rounded mx-auto d-block" src="${currentSong.albumArt}" alt="Album Art">
          <p class="h4">${currentSong.title}</p>
          <p class="h5">${currentSong.artist}</p>
          <p class="h6">${currentSong.price}</p>
              <audio controls class="audio-width" id="id${currentSong.trackId}">
                <source src="${currentSong.preview}" type="audio/ogg">
              </audio>
      </div>
      
      `
    }
    songElem.innerHTML = template
  }






}
