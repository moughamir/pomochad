import VolumeSlider from "./options/volumeSlider";
import Themes from "./options/themeSwitcher";

import DummyWidget from "./options/dummyWidget";

function Settings() {
  return (
    <>
      <h1>Settings</h1>

      <div className="settings">
        <div className="miscWidgets">
          <VolumeSlider />
          <DummyWidget />
        </div>

        <Themes />
      </div>
    </>
  );
}

export default Settings;
