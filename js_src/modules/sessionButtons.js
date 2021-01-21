const createIcon = (btnClass, hoverTitle, iconClass) => {
  const btn = document.querySelector("." + btnClass);
  btn.setAttribute("title", hoverTitle);

  const icon = document.createElement("i");

  icon.classList.add("fas", iconClass, "fa-lg");

  btn.appendChild(icon);
};

const makeSessionBtns = () => {
  createIcon("start", "start", "fa-rocket");
  createIcon("restart", "restart", "fa-redo");
  createIcon("pause", "pause", "fa-stop");
  createIcon("resume", "resume", "fa-play");
};

export { makeSessionBtns };
