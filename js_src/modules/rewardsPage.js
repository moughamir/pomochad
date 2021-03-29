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

galleryBtn.addEventListener("click", () => {
  imagePreviewer.style.display = "grid";
  default_WaifuCard_Div.style.display = "none";
});
