// update score == remaining gems

let dbUrl = "https://gitlab.com/siduck761/ezli/-/raw/master/sfw/";

import { userScore, userCards } from "../index.js";
import { saveUserData_toDB } from "./userAuth.js";
import { add_loadingAnimation } from "./miscFuncs.js";

let gemsAvailable = document.querySelector(".gemsAvailable");

export const showRemaining_Gems = (gems) => {
  gemsAvailable.textContent = gems;
};

export const create_ImageLink = (n) => {
  return `${dbUrl}${n}.jpg`;
};

let galleryBtn = document.querySelector(".showCollection");
let imagePreviewer = document.querySelector(".imagePreviewer");
let default_WaifuCard_Div = document.querySelector(".default_WaifuCard_Div");
let default_WaifuCard_Img = document.querySelector(".default_WaifuCard_Img");

export const clear_Gallery = () => {
  imagePreviewer.style.display = "flex";
  default_WaifuCard_Div.style.display = "flex";

  let sampleWaifuCard = document.querySelectorAll(".sampleWaifuCard");

  if (sampleWaifuCard.length > 0) sampleWaifuCard.forEach((t) => t.remove());
};

let unlockRewardsDiv = document.querySelector(".unlockRewardsDiv");

unlockRewardsDiv.addEventListener("click", () => {
  imagePreviewer.style.display = "flex";
  default_WaifuCard_Div.style.display = "grid";

  // sets recently purchased waifu card

  clear_Gallery();

  if (userScore >= 2000) {
    userCards = parseInt(userCards) + 1;
    userScore -= 2000;

    // sync scores
    showRemaining_Gems(userScore);
    saveUserData_toDB();

    add_loadingAnimation(default_WaifuCard_Div);

    default_WaifuCard_Img.setAttribute("src", create_ImageLink(userCards));

    return;
  }
  alert("not enough gems!");
});

export const create_WaifuCard = (n) => {
  let cardImg = document.createElement("img");
  cardImg.classList.add("sampleWaifuCard");

  cardImg.setAttribute("src", create_ImageLink(n));
  cardImg.setAttribute("loading", "lazy");

  imagePreviewer.appendChild(cardImg);
};

export const update_Gallery = (n) => {
  for (let i = 1; i <= n; i++) create_WaifuCard(i);
};

galleryBtn.addEventListener("click", () => {
  clear_Gallery();

  imagePreviewer.style.display = "grid";
  default_WaifuCard_Div.style.display = "none";

  update_Gallery(userCards);
});
