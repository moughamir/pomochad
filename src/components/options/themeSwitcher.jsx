import themelist from "../../themelist";
import { switchTheme } from "../../utils";

function Theme(props) {
  return (
    <div
      className="aTheme"
      style={{
        background: props.bg,
        color: props.fg,
      }}
      onClick={() => switchTheme(props.name)}
    >
      {props.name}
    </div>
  );
}

function getThemeColors(name) {
  let fg = themelist[name].fg;
  let bg = themelist[name].bg;

  return { fg, bg };
}

let themeNames = Object.keys(themelist);

export default () => {
  return (
    <div className="themeSwitcher">
      <h3>
        <span>Themes</span>
      </h3>

      <div className="themeList">
        {themeNames.map((item) => (
          <Theme
            name={item}
            fg={getThemeColors(item).fg}
            bg={getThemeColors(item).bg}
          />
        ))}
      </div>
    </div>
  );
};
