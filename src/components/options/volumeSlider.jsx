import "../../css/settings.css";
import { view } from "@risingstack/react-easy-state";
import { volume } from "../../store";

function handleRange(e) {
  volume.value = e.target.value;
  localStorage.setItem("volume", volume.value);
}

export default view(() => (
  <div id="volumeContainer">
    <h3>Adjust volume</h3>
    <div id="sliderContainer">
      <input
        type="range"
        min="0"
        max="100"
        id="slider"
        value={volume.value}
        onInput={handleRange}
      />
      <div class="volumePercentage">
        {volume.value}
      </div>
    </div>
  </div>
));
