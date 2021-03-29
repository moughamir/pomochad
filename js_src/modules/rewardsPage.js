// update score == remaining gems

let available_Gems_Div = document.querySelector(".available_Gems_Div");

export const showRemaining_Gems = (gems) => {
  available_Gems_Div.textContent = gems;
};
