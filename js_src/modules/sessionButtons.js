const createIcon = (btnClass, hoverTitle, iconClass) => {
  const btn = document.querySelector("." + btnClass);
  btn.setAttribute("title", hoverTitle);

  const icon = document.createElement("i");

  icon.classList.add("fas", iconClass, "fa-lg");

  btn.appendChild(icon);
};

const makeSessionBtns = () => {
  createIcon("start", "start", "fa-play");
  createIcon("pause", "pause", "fa-stop");
};

export { makeSessionBtns };
