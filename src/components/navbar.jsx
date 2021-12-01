import { useState } from "preact/hooks";
import { Link } from "wouter-preact";
import { switchTheme } from "../utils";

import { Lightning, SlidersHorizontal, Target, User } from "phosphor-react";

import "../css/navbar.css";

function BrandInfo() {
  return (
    <div className="brand">
      <Target className="brandLogo" size={30} weight="fill" />
      <Link href="/">
        <div className="brandTitle">Pomochad</div>
      </Link>
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
      <Lightning
        className="themeToggle"
        size={26}
        onClick={() => addTheme()}
      />

      <div className="navbarLinks">
        <User className="userIcon" size={20} />
        <Link href="/settings">
          <SlidersHorizontal className="settingsBtn" size={20} />
        </Link>
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
