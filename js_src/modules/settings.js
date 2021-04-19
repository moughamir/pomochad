import { timerSound } from "./miscFuncs";
import { userSound } from "../index";

// timer sounds section

let sound_Settings = document.querySelector(".sound_Settings");

const add_TimerSound = (audio_file) => {
  let bee = document.createElement("p");

  bee.classList.add("timer_audio");
  bee.textContent = audio_file;

  sound_Settings.appendChild(bee);
};

export const all_sounds = [
  "cocGame",
  "siren",
  "yooo",
  "pikachuu",
  "angryBird",
  "gnuReload",
  "piano",
  "vasco_shot",
  "pizzaro",
  "white_beard"
];

export const add_Audios = () => {
  for (let i = 0; i < all_sounds.length; i++) add_TimerSound(all_sounds[i]);
};

add_Audios();

let mp3files = document.querySelectorAll(".timer_audio");

import { saveUserData_toDB } from "./userAuth.js";

mp3files.forEach((temp) => {
  temp.addEventListener("mouseover", () => {
    temp.style.backgroundColor = "#545E6A";
    temp.style.cursor = "pointer";
    temp.style.color = "white";
  });

  temp.addEventListener("mouseout", () => {
    temp.style.backgroundColor = "#fafafa";
    temp.style.cursor = "default";
    temp.style.color = "#545E6A";
  });

  temp.addEventListener("click", () => {
    for (let i = 0; i < all_sounds.length; i++) {
      mp3files[i].style.border = "none";
      mp3files[i].style.color = "#82868E";
      mp3files[i].style.textDecoration = "line-through";
    }
    let activebg = "#545E6A";

    temp.style.textDecoration = "none";
    temp.style.color = "#545E6A";
    temp.style.border = `5px dotted ${activebg}`;
    temp.style.backgroundColor = "pink";

    // save sound

    userSound = temp.innerText;
    saveUserData_toDB();

    let ding = document.querySelector("#dingding");
    ding.setAttribute("src", `./assets/sounds/${userSound}.mp3`);

    timerSound();
  });
});
