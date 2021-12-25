import { useState } from "preact/hooks";
import { Link } from "wouter-preact";
import { switchTheme } from "../utils";

import { Ghost, Lightning, Nut, Target, User } from "phosphor-react";

import "../css/navbar.css";

function BrandInfo() {
  return (
    <div class="brand">
      <Target class="brandLogo" size={30} weight="fill" />
      <Link href="/">
        <div class="brandTitle">Pomochad</div>
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
    <div class="navBtns">
      <Lightning
        class="themeToggle"
        size={26}
        onClick={() => addTheme()}
      />

      <div class="navbarLinks">
        <Link href="/todos">
          <div class="todosBtn">
            <Ghost class="todosIcon" size={23} />
            Todos
          </div>
        </Link>

        <User class="userIcon" size={23} onClick={() => alert('WIP! the data will be stored in localstorage for now')} />

        <Link href="/settings">
          <Nut class="settingsBtn" size={25} />
        </Link>
      </div>
    </div>
  );
}

function Navbar() {
  return (
    <div class="navbar">
      <BrandInfo />
      <NavbarLinks />
    </div>
  );
}

export default Navbar;
