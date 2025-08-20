// const tracksImage = document.getElementById("img");
// const artist  = document.getElementById("artist");
// const title = document.getElementById("title");
// let details = document.getElementById("container");

// const audios = JSON.parse(localStorage.getItem("tracks"));
// console.log(audios);


// if (audios) {
//     details.innerHTML = `
//         <img src="${audios.image}" id="img" class="w-full h-[406px] rounded-3xl mt-10" alt="">
//             <div class="flex flex-col gap-1 mt-6">
//                 <h2 id="artist" class="font-bold text-2xl text-[#010109]">${audios.artist}</h2>
//                 <p id="title" class="font-medium text-lg text-[#0101097D]">${audios.title}</p>
//             </div>

//             <audio id="audios" src="${audios.song}" controls class="hidden"></audio>
//             <div class="flex gap-3 mt-28 justify-center items-center">
//                 <button><i class='bxs bxs-skip-previous text-7xl text-black'></i></button>
//                 <button>
//                     <div class="w-[70px] h-[70px] rounded-full bg-white flex justify-center items-center">
//                         <i class='bx bx-play text-7xl text-black'></i>
//                     </div>
//                 </button>
//                 <button>
//                     <i class='bxs bxs-skip-next text-7xl text-black'></i>
//                 </button>
//             </div>
//     `
// }

// const audio = document.getElementById("audios");

// let audiosIndex = 0;

// function loadSong(index) {
//     audio.src = audios[index].song
// }

// function pauseSong() {
//     if (!audio.paused) {
//         audio.pause();
//     }
// }

// function nextSong() {
//     audiosIndex = (audiosIndex + 1) % audios.length
//     loadSong(audiosIndex)
//     audio.play()
// }

// function prevSong() {
//     audiosIndex = (audiosIndex - 1 + audios.length) % audios.length
//     loadSong(audiosIndex)
//     audio.play()
// }

// loadSong(audiosIndex)



let details = document.getElementById("container");

// LocalStorage dan ma'lumot olish
let audios = JSON.parse(localStorage.getItem("tracks"));

// Agar bitta track bo'lsa, uni arrayga o‘girish
if (audios && !Array.isArray(audios)) {
    audios = [audios];
}

// Containerga dastlabki trekni yuklash
if (audios && audios.length > 0) {
    const current = audios[0];
    details.innerHTML = `
        <img src="${current.image}" id="img" class="w-full h-[406px] rounded-3xl mt-10" alt="">
        <div class="flex flex-col gap-1 mt-6">
            <h2 id="artist" class="font-bold text-2xl text-[#010109]">${current.artist}</h2>
            <p id="title" class="font-medium text-lg text-[#0101097D]">${current.title}</p>
        </div>

        <audio id="audios" src="${current.song}" controls class="hidden"></audio>
        <div class="flex gap-3 mt-28 justify-center items-center">
            <button id="playBtn">
                <div class="w-[70px] h-[70px] rounded-full bg-white flex justify-center items-center">
                    <i class='bx bx-play text-7xl text-black'></i>
                </div>
            </button>
        </div>
    `;
}

// DOM elementlarni olish
const audio = document.getElementById("audios");
const img = document.getElementById("img");
const artist = document.getElementById("artist");
const title = document.getElementById("title");
const playBtn = document.getElementById("playBtn");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let audiosIndex = 0;
let isPlaying = false;

// Trackni yuklash funksiyasi
function loadSong(index) {
    audio.src = audios[index].song;
    img.src = audios[index].image;
}

// Play / Pause funksiyasi
function togglePlay() {
    if (isPlaying) {
        audio.pause();
        playBtn.innerHTML = `<div class="w-[70px] h-[70px] rounded-full bg-white flex justify-center items-center">
                                <i class='bx bx-play text-7xl text-black'></i>
                             </div>`;
    } else {
        audio.play();
        playBtn.innerHTML = `<div class="w-[70px] h-[70px] rounded-full bg-white flex justify-center items-center">
                                <i class='bx bx-pause text-7xl text-black'></i>
                             </div>`;
    }
    isPlaying = !isPlaying;
}


function updatePlayIcon() {
    playBtn.innerHTML = `<div class="w-[70px] h-[70px] rounded-full bg-white flex justify-center items-center">
                            <i class='${isPlaying ? "bx bx-pause" : "bx bx-play"} text-7xl text-black'></i>
                         </div>`;
}

// Event listenerlar
playBtn.addEventListener("click", togglePlay);
nextBtn.addEventListener("click", nextSong);
prevBtn.addEventListener("click", prevSong);

// Dastlabki trekni yuklash
loadSong(audiosIndex);
