import { useState } from "preact/hooks";
import { switchTheme } from "../utils";

import {
  Lightning,
  Moon,
  SlidersHorizontal,
  Target,
  User,
} from "phosphor-react";

import "../css/navbar.css";

function BrandInfo() {
  return (
    <div className="brand">
      <Target className="brandLogo" size={30} weight="fill" />
      <div className="brandTitle">PomoReward</div>
    </div>
  );
}

function NavbarLinks() {
  let default_Theme = document.querySelector("body").dataset.theme;
  let [theme, setTheme] = useState(default_Theme);

  function addTheme() {
    switch (theme) {
      case "light":
        setTheme("dark");
        switchTheme("dark");
        break;

      default:
        setTheme("light");
        switchTheme("light");
    }
  }

  return (
    <div className="navBtns">
      {theme == "light" && (
        <Lightning
          className="themeToggle"
          size={26}
          onClick={() => addTheme()}
        />
      )}
      {theme == "dark" && (
        <Moon className="themeToggle" size={26} onClick={() => addTheme()} />
      )}

      <div className="navbarLinks">
        <User className="userIcon" size={20} />
        <SlidersHorizontal className="settingsBtn" size={20} />
      </div>
    </div>
  );
}

function Navbar() {
  return (
    <div className="navbar">
      <BrandInfo />
      <NavbarLinks />
    </div>
  );
}

export default Navbar;
