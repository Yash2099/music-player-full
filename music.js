let now_playing = document.querySelector('.now-playing');
let track_art = document.querySelector('.track-art');
let track_name = document.querySelector('.track-name');
let track_artist = document.querySelector('.track-artist');

let playpause_btn = document.querySelector('.playpause-track');
let next_btn = document.querySelector('.next-track');
let prev_btn = document.querySelector('.prev-track');

let seek_slider = document.querySelector('.seek_slider');
let volume_slider = document.querySelector('.volume_slider');
let curr_time = document.querySelector('.current-time');
let total_duration = document.querySelector('.total-duration');
let wave = document.getElementById('wave');
let randomIcon = document.querySelector('.fa-random');
let curr_track = document.createElement('audio');

let track_index = 0;
let isPlaying = false;
let isRandom = false;
let updateTimer;

const music_list = [
    {
        img: 'media/Am I Dreaming.png',
        name: "Am I Dreaming",
        artist: "Metro Boomin, A$AP Rocky, Roisee",
        music: "media/Am I Dreaming - Metro Boomin, A$AP Rocky, Roisee.m4a"
    },
    {
        img: 'media/Alive.png',
        name: "Alive",
        artist: "Warbly Jets",
        music: "media/Alive-Warbly Jets.m4a"
    },
    {
        img: 'media/Annihilate.png',
        name: "Annihilate",
        artist: "Metro Boomin, Swae Lee, Lil Wayne, Offset",
        music: "media/Annihilate (Spider-Man Across the Spider-Verse) - Metro Boomin, Swae Lee, Lil Wayne, Offset.m4a"
    },
    {
        img: 'media/It_s On Again.png',
        name: "It_s On Again",
        artist: "Alicia Keys",
        music: "media/It_s On Again - Alicia Keys.m4a"
    },
    {
        img: 'media/Calling.png',
        name: "Calling",
        artist: "Metro Boomin, Swae Lee, Nav",
        music: "media/Calling (Spider-Man Across the Spider-Verse) - Metro Boomin, Swae Lee, Nav.m4a"
    },
    {
        img: 'media/Sunflower.png',
        name: "Sunflower",
        artist: "Post Malone, Swae Lee",
        music: "media/Sunflower (Spider-Man Into the Spider-Verse) - Post Malone, Swae Lee.m4a"
    },
    {
        img: 'media/Swing.png',
        name: "Swing",
        artist: "Benji__EARTHGANG",
        music: "media/Swing_From_Marvels_Spider-Man_2_feat_Benji__EARTHGANG.mp3"
    }
];
