const container = document.getElementById("container");


const tracks = [
    {
      image: "/image copy.png",
      artist: "Kendrick Lamar",
      title: "Not Like Us",
      duration: "5:54",
      song: "/NotlikeUs.mp3"
    },
    {
      image: "/floymenor.png",
      artist: "Floy Mencor",
      title: "Gata Only",
      duration: "3:35",
      song: "/GataOnly.mp3"
    },
    {
      image: "/image.png",
      artist: "Acido",
      title: "Phonk",
      duration: "2:04",
      song: "/LunaBala.mp3"
    },
    {
      image: "/umbrella.png",
      artist: "Rihanna",
      title: "Umbrella",
      duration: "4:14",
      song: "/Umbrella.mp3"
    },
    {
      image: "/lunabala.png",
      artist: "Luna Bala",
      title: "phonk",
      duration: "2:04",
      song: "/LunaBala.mp3"
    },
    {
      image: "/image.png",
      artist: "Montagem",
      title: "Bailao",
      duration: "2:04",
      song: "/LunaBala.mp3"
    },
    {
      image: "/newjeans.png",
      artist: "New Jeans",
      title: "Jersey Remix",
      duration: "1:49",
      song: "/NewJeans.mp3"
    },
    {
        image: "/image copy 2.png",
        artist: "Whisper",
        title: "Careless whisper",
        duration: "4:59",
        song: "/LunaBala.mp3"
      }
  ];
  

function loadTracks() {
    container.innerHTML = '';
    tracks.forEach((track) => {
        let songDiv = document.createElement("div");
        songDiv.classList.add(
            "w-full",
            "rounded-3xl",
            "px-4",
            "py-2",
            "bg-[#059DC014]",
            "flex-col",
            "flex",
            "gap-10"
          );
        songDiv.innerHTML = `
          <div class=" flex justify-between items-center">
                    <div class="flex gap-4 items-center">
                        <img src="${track.image}" class="w-[58px] h-[58px] rounded-2xl" alt="track">
                        <div class="">
                            <h1 class="font-medium text-lg ">${track.artist}</h1>
                            <p class="text-sm text-gray-600 font-normal">${track.title}</p>
                        </div>
                    </div>
                    <div class="flex gap-2 items-center">
                        <span>${track.duration}</span>
                        <i class='bxr  bx-dots-vertical-rounded text-xl text-black font-medium'></i> 
                    </div>
                </div>
        `;
        songDiv.addEventListener("click", () => {
            localStorage.setItem("tracks", JSON.stringify(track));
            window.location.href = "tracks.html"
        });
        container.append(songDiv);
    })
}

loadTracks()

localStorage.setItem("almusics", JSON.stringify(tracks));