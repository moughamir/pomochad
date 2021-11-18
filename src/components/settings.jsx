import "../css/settings.css";
import { useState } from "react";

export let volume = 0.9;

function VolumeSlider() {
  let [value, setValue] = useState(90);

  function handleRange(e) {
    setValue(e.target.value);
    volume = value / 100;
  }

  return (
    <div id="volumeContainer">
      <h3>Adjust volume</h3>
      <div id="sliderContainer">
        <input
          type="range"
          min="0"
          max="100"
          id="slider"
          value={value}
          onInput={handleRange}
        />
        <div class="volumePercentage">
          {value}
        </div>
      </div>
    </div>
  );
}

function Settings() {
  return (
    <>
      <h1>Settings</h1>

      <div className="settings">
        <VolumeSlider />
      </div>
    </>
  );
}

export default Settings;
