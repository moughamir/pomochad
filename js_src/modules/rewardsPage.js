// update score == remaining gems

import { userScore, userCards } from "../index.js";
import { saveUserData_toDB } from "./userAuth.js";

let available_Gems_Div = document.querySelector(".available_Gems_Div");

export const showRemaining_Gems = (gems) => {
  available_Gems_Div.textContent = gems;
};

let unlockRewardsDiv = document.querySelector(".unlockRewardsDiv");

unlockRewardsDiv.addEventListener("click", () => {
  userCards = parseInt(userCards) + 1;
  userScore -= 2000;

  // sync scores
  showRemaining_Gems(userScore);
  saveUserData_toDB();
});
