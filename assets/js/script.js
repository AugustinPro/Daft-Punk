var playButton = document.getElementById("playSong");
playButton.addEventListener("click", playPause);

mySong = document.getElementById("currentSong");
function playPause() { 
    if (mySong.paused) {
        mySong.play();
        playButton.innerHTML = "Pause";
        }
    else  {
        mySong.pause(); 
        playButton.innerHTML = "Play";
        }
} 


newSong = document.getElementById("songSwap");
function songSwapper(song) {
    newSong.src = "assets/music/"+song.className+'.mp3';
    playButton.innerHTML = "Pause"
    mySong.load();
    mySong.play();
}