let now_playing = document.querySelector(".now-playing");
let track_art = document.querySelector(".track-art");
let track_name = document.querySelector(".track-name");
let track_artist = document.querySelector(".track-artist");

let playpause_btn = document.querySelector(".playpause-track");
let next_btn = document.querySelector(".next-track");
let prev_btn = document.querySelector(".prev-track");

let seek_slider = document.querySelector(".seek_slider");
let volume_slider = document.querySelector(".volume_slider");
let curr_time = document.querySelector(".curr_time");
let total_duration = document.querySelector(".total_duration");
let wave = document.getElementById('wave');
let randomIcon = document.querySelector('.fa-random');


let track_index = 0;
let isPlaying = false;
let isRandom = false;
let updateTimer;


let curr_track = document.createElement('audio');


const music_list = [
    {
        img: 'images/Am I Dreaming.png',
        name: "Am I Dreaming",
        artist: "Metro Boomin, A$AP Rocky, Roisee",
        music: "song/Am I Dreaming - Metro Boomin, A$AP Rocky, Roisee.m4a"
    },
    {
        img: 'images/Alive.png',
        name: "Alive",
        artist: "Warbly Jets",
        music: "song/Alive - Warbly Jets.m4a"
    },
    {
        img: 'images/Annihilate.png',
        name: "Annihilate",
        artist: "Metro Boomin, Swae Lee, Lil Wayne, Offset",
        music: "song/Annihilate (Spider-Man Across the Spider-Verse) - Metro Boomin, Swae Lee, Lil Wayne, Offset.m4a"
    },
    {
        img: 'images/It_s On Again.png',
        name: "It_s On Again",
        artist: "Alicia Keys",
        music: "song/It_s On Again - Alicia Keys.m4a"
    },
    {
        img: 'images/Calling.png',
        name: "Calling",
        artist: "Metro Boomin, Swae Lee, Nav",
        music: "song/Calling (Spider-Man Across the Spider-Verse) - Metro Boomin, Swae Lee, Nav.m4a"
    },
    {
        img: 'images/Sunflower.png',
        name: "Sunflower",
        artist: "Post Malone, Swae Lee",
        music: "song/Sunflower (Spider-Man Into the Spider-Verse) - Post Malone, Swae Lee.m4a"
    },
    {
        img: 'images/Swing.png',
        name: "Swing",
        artist: "Benji__EARTHGANG",
        music: "song/Swing_From_Marvels_Spider-Man_2_feat_Benji__EARTHGANG.mp3"
    },
    {
        img: 'images/What_s Up Danger.png',
        name: 'Whats Up Danger',
        artist: "Blackway, Black Caviar",
        music: "song/What_s Up Danger - Blackway, Black Caviar.m4a"

    }
];
loadTrack(track_index);

function loadTrack(track_index) {

    clearInterval(updateTimer);
    reset();


    curr_track.src = music_list[track_index].music;
    curr_track.load();


    track_art.style.backgroundImage =
        "url(" + music_list[track_index].img + ")";
    track_name.textContent = music_list[track_index].name;
    track_artist.textContent = music_list[track_index].artist;
    now_playing.innerHTML =
        "PLAYING " + (track_index + 1) + " OF " + music_list.length;


    updateTimer = setInterval(seekUpdate, 1000);


    curr_track.addEventListener("ended", nextTrack);


    random_bg_color();
}

function random_bg_color() {
    let hex = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e'];
    let a = '';

    function populate(a) {
        for (let i = 0; i < 6; i++) {
            let x = Math.round(Math.random() * 14);
            let y = hex[x];
            a += y;
        }
        return a;
    }
    let Color1 = populate('#');
    let Color2 = populate('#');
    var angle = 'to right';

    let gradient = 'linear-gradient(' + angle + ',' + Color1 + ', ' + Color2 + ")";
    document.body.style.background = gradient;
}



function reset() {
    curr_time.innerHTML = "00:00";
    total_duration.innerHTML = "00:00";
    seek_slider.value = 0;
}
function randomTrack() {
    isRandom ? pauseRandom() : playRandom();
}
function playRandom() {
    isRandom = true;
    randomIcon.classList.add('randomActive');
}
function pauseRandom() {
    isRandom = false;
    randomIcon.classList.remove('randomActive');
}
function repeatTrack() {
    let current_index = track_index;
    loadTrack(current_index);
    playTrack();
}
function playpauseTrack() {
    if (!isPlaying) playTrack();
    else pauseTrack();
}

function playTrack() {

    curr_track.play();
    isPlaying = true;
    track_art.classList.add('rotate');
    wave.classList.add('loader');

    playpause_btn.innerHTML = '<i class="fa fa-pause-circle fa-5x"></i>';
}

function pauseTrack() {

    curr_track.pause();
    isPlaying = false;
    track_art.classList.remove('rotate');
    wave.classList.remove('loader');

    playpause_btn.innerHTML = '<i class="fa fa-play-circle fa-5x"></i>';
}

function nextTrack() {

    if (track_index < music_list.length - 1) {
        track_index += 1;
    }
    else {
        track_index = 0;
    }

    loadTrack(track_index);
    playTrack();
}

function prevTrack() {

    if (track_index > 0) {
        track_index -= 1;
    }
    else {
        track_index = music_list.length - 1;
    }

    loadTrack(track_index);
    playTrack();
}
function seekTo() {

    let seekTo = curr_track.duration * (seek_slider.value / 100);

    curr_track.currentTime = seekTo;
}

function setVolume() {

    curr_track.volume = volume_slider.value / 100;
    seek_slider.value = curr_track.volume * 100;
}

function seekUpdate() {
    let seekPosition = 0;


    if (!isNaN(curr_track.duration)) {
        seekPosition = curr_track.currentTime * (100 / curr_track.duration);
        seek_slider.value = seekPosition;


        let currentMinutes = Math.floor(curr_track.currentTime / 60);
        let currentSeconds = Math.floor(curr_track.currentTime - currentMinutes * 60);
        let durationMinutes = Math.floor(curr_track.duration / 60);
        let durationSeconds = Math.floor(curr_track.duration - durationMinutes * 60);


        if (currentSeconds < 10) { currentSeconds = "0" + currentSeconds; }
        if (durationSeconds < 10) { durationSeconds = "0" + durationSeconds; }
        if (currentMinutes < 10) { currentMinutes = "0" + currentMinutes; }
        if (durationMinutes < 10) { durationMinutes = "0" + durationMinutes; }


        curr_time.innerHTML = currentMinutes + ":" + currentSeconds;
        total_duration.innerHTML = durationMinutes + ":" + durationSeconds;
    }
}


