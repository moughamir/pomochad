import "../css/settings.css";

function VolumeSlider() {
  return (
    <div id="volumeChanger">
      <input
        type="range"
        min="1"
        max="100"
        value="20"
        id="slider"
      />
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
