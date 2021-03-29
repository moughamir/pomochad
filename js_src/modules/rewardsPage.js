// update score == remaining gems

import { userScore, userCards } from "../index.js";
import { saveUserData_toDB } from "./userAuth.js";

let available_Gems_Div = document.querySelector(".available_Gems_Div");

export const showRemaining_Gems = (gems) => {
  available_Gems_Div.textContent = gems;
};

let unlockRewardsDiv = document.querySelector(".unlockRewardsDiv");

unlockRewardsDiv.addEventListener("click", () => {
  imagePreviewer.style.display = "flex";
  default_WaifuCard_Div.style.display = "grid";

  let sampleWaifuCard = document.querySelectorAll(".sampleWaifuCard");

  sampleWaifuCard.forEach((t) => {
    t.remove();
  });

  if (userScore >= 2000) {
    userCards = parseInt(userCards) + 1;
    userScore -= 2000;

    // sync scores
    showRemaining_Gems(userScore);
    saveUserData_toDB();
  } else {
    alert("not enough gems!");
  }
});

let galleryBtn = document.querySelector(".showCollection");
let imagePreviewer = document.querySelector(".imagePreviewer");
let default_WaifuCard_Div = document.querySelector(".default_WaifuCard_Div");

let dbUrl =
  "https://media.githubusercontent.com/media/eek13/mywaifus/master/sfw/";

export const create_WaifuCard = (n) => {
  let cardImg = document.createElement("img");
  cardImg.classList.add("sampleWaifuCard");

  cardImg.setAttribute("src", `${dbUrl}${n}.jpg`);

  imagePreviewer.appendChild(cardImg);
};

export const update_Gallery = (n) => {
  for (let i = 1; i <= n; i++) create_WaifuCard(i);
};

galleryBtn.addEventListener("click", () => {
  imagePreviewer.style.display = "grid";
  default_WaifuCard_Div.style.display = "none";
  update_Gallery(userCards);
});
