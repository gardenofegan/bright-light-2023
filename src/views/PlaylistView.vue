<script setup>
// import listOfMusic from "./../songs";
import Angels from './../assets/audio/Bright Lights Angels.mp3';
import Annunciation from './../assets/audio/Bright Lights Annunciation.mp3';
import Candles from './../assets/audio/Bright Lights Candles.mp3';
import CandyCanes from './../assets/audio/Bright Lights Candy Canes.mp3';
import Deer from './../assets/audio/Bright Lights Deer.mp3';
import EndofDrive from './../assets/audio/Bright Lights End of Drive_.mp3';
import Entrance1 from './../assets/audio/Bright Lights Entrance with Music.mp3';
import Entrance2 from './../assets/audio/Bright Lights Entrance.mp3';
import Gifts from './../assets/audio/Bright Lights Gifts-1.mp3';
import Jesus from './../assets/audio/Bright Lights Jesus.mp3';
import Snowmen from './../assets/audio/Bright Lights Snowmen.mp3';
import Soldiers from './../assets/audio/Bright Lights Soldiers.mp3';
import StNick from './../assets/audio/Bright Lights St. Nick.mp3';
import Stars from './../assets/audio/Bright Lights Stars.mp3';
import Trees from './../assets/audio/Bright Lights Trees.mp3';
import Wreaths from './../assets/audio/Bright Lights Wreaths.mp3';
import { reactive, ref } from "vue";

//example components
import DefaultNavbar from "../examples/navbars/NavbarDefault.vue";
import DefaultFooter from "../examples/footers/FooterDefault.vue";


// Data
let currentSong = reactive({
    title: "Angels",
    artist: "Fr Meyer",
    src: Angels,
  });
let currentIndex = ref(0);
let isPlaying = ref(false);
const listOfSongs = [
  {
    title: "Angels",
    artist: "Fr Meyer",
    src: Angels,
  },
  {
    title: "Annunciation",
    artist: "Fr Meyer",
    src: Annunciation,
  },
  {
    title: "Candles",
    artist: "Fr Meyer",
    src: Candles,
  },
  {
    title: "Candy Canes",
    artist: "Fr Meyer",
    src: CandyCanes,
  },
  {
    title: "Deer",
    artist: "Fr Meyer",
    src: Deer,
  },
  {
    title: "End of Drive",
    artist: "Fr Meyer",
    src: EndofDrive,
  },
  {
    title: "Entrance",
    artist: "Fr Meyer",
    src: Entrance1,
  },
  {
    title: "Entrance",
    artist: "Fr Meyer",
    src: Entrance2,
  },
  {
    title: "Gifts",
    artist: "Fr Meyer",
    src: Gifts,
  },
  {
    title: "Jesus",
    artist: "Fr Meyer",
    src: Jesus,
  },
  {
    title: "Snowmen",
    artist: "Fr Meyer",
    src: Snowmen,
  },
  {
    title: "Soldiers",
    artist: "Fr Meyer",
    src: Soldiers,
  },
  {
    title: "St. Nick",
    artist: "Fr Meyer",
    src: StNick,
  },
  {
    title: "Stars",
    artist: "Fr Meyer",
    src: Stars,
  },
  {
    title: "Trees",
    artist: "Fr Meyer",
    src: Trees,
  },
  {
    title: "Wreaths",
    artist: "Fr Meyer",
    src: Wreaths,
  },
];
let player = reactive(new Audio());

// Methods
const play = function(song) {
	if (typeof song.src !== "undefined") {
		currentSong.title = song.title;
    currentSong.artist = song.artist;
    currentSong.src = song.src;
		player.src = currentSong.src;
	}
	player.play();
	player.addEventListener(
		"ended",
		function() {
			currentIndex.value++;
			if (currentIndex.value > listOfSongs.length - 1) {
				currentIndex.value = 0;
			}
			// currentSong = listOfSongs[currentIndex.value];
      currentSong.title = listOfSongs[currentIndex.value].title;
      currentSong.artist = listOfSongs[currentIndex.value].artist;
      currentSong.src = listOfSongs[currentIndex.value].src;
			play(currentSong);
		}.bind(this)
	);
	isPlaying.value = true;
}

const pause = function() {
	player.pause();
	isPlaying.value = false;
}

const next = function() {
	currentIndex.value++;
	currentIndex.value %= listOfSongs.length;
	// currentSong = listOfSongs[currentIndex.value];
  currentSong.title = listOfSongs[currentIndex.value].title;
  currentSong.artist = listOfSongs[currentIndex.value].artist;
  currentSong.src = listOfSongs[currentIndex.value].src;
  console.log(currentSong);
	play(currentSong);
}

const prev = function() {
	currentIndex.value--;
	if (currentIndex.value < 0) {
		currentIndex.value = listOfSongs.length - 1;
	}
	// currentSong = listOfSongs[currentIndex.value];
  currentSong.title = listOfSongs[currentIndex.value].title;
  currentSong.artist = listOfSongs[currentIndex.value].artist;
  currentSong.src = listOfSongs[currentIndex.value].src;
  console.log(currentSong);
	play(currentSong);
}


// Created
// currentSong = listOfSongs[currentIndex.value];
currentSong.title = listOfSongs[currentIndex.value].title;
currentSong.artist = listOfSongs[currentIndex.value].artist;
currentSong.src = listOfSongs[currentIndex.value].src;
player.src = currentSong.src;

</script>
<template>
  <DefaultNavbar
    dark
    transparent
  />
  <div class="card card-body shadow-xl mx-3 mx-md-4 mt-10">
    <div class="py-lg-4 px-lg-6 py-2 px-2">
      <div class="row">
        <div class="col-12">
          <h3 class="mb-3 text-center">
            Bright Lights Playlist
          </h3>

          <section class="player">
            <h1 class="song-title">
              {{ currentSong.title }} - <span>{{ currentSong.artist }}</span>
            </h1>
            <div class="controls">
              <button class="prev" @click="prev">
                <img
                  src="./../assets/images/previous.png"
                  alt="previous logo"
                  class="player-control-logo"
                />
              </button>
              <button class="play" v-if="!isPlaying" @click="play">
                <img src="./../assets/images/play.png" alt="play logo" class="play-control-logo" />
              </button>
              <button class="pause" v-else @click="pause">
                <img src="./../assets/images/pause.png" alt="pause logo" class="play-control-logo" />
              </button>
              <button class="next" @click="next">
                <img src="./../assets/images/next.png" alt="next logo" class="player-control-logo" />
              </button>
            </div>
          </section>
          <section class="playlist">
            <h3>My playlist</h3>
            <button
              v-for="song in listOfSongs"
              :key="song.src"
              @click="play(song)"
              :class="song.title === currentSong.title ? 'song playing' : 'song'"
            >
              {{ song.title }} - {{ song.artist }}
            </button>
          </section>
          
    		
        </div>
      </div>
    </div>
  </div>
  <DefaultFooter />
</template>
<style scoped>
.player-control-logo {
  width: 40px;
}
.play-control-logo {
  width: 50px;
}
main {
  width: 100%;
  max-width: 768px;
  margin: 100px auto;
  padding: 25px;
}

.song-title {
  color: #fff;
  font-size: 30px;
  font-weight: 700;
  text-transform: uppercase;
  text-align: center;
}

.song-title span {
  font-weight: 400;
}

.controls {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px 15px;
}

button {
  appearance: none;
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
}
button:hover {
  opacity: 0.8;
}

.play,
.pause {
  font-size: 20px;
  font-weight: 700;
  padding: 15px 25px;
  margin: 0px 50px;
  border-radius: 8px;
  color: #fff;
  background-color: #cc2e5d;
}
.next,
.prev {
  font-size: 16px;
  font-weight: 700;
  padding: 10px 20px;
  margin: 0px 15px;
  border-radius: 6px;
  color: #fff;
  background-color: #ff5858;
}

.playlist {
  padding: 0px 30px;
}
.playlist h3 {
  color: #fff;
  font-size: 28px;
  font-weight: 400;
  margin-bottom: 30px;
  text-align: center;
  font-family: "Courier New", Courier, monospace;
}

.playlist .song {
  display: block;
  width: 65%;
  padding: 15px;
  font-size: 20px;
  font-weight: 700;
  cursor: pointer;
  margin: 20px auto;
  color: #fff;
  font-family: "Courier New", Courier, monospace;
  background-image: linear-gradient(to right, #d3bdc3, #f59292);
}
.playlist .song:hover {
  color: #ff5858;
}

.playlist .song.playing {
  color: #fff;
  background-image: linear-gradient(to right, #cc2e5d, #ff5858);
}
</style>