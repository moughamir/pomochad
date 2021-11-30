import VolumeSlider from "./options/volumeSlider";
import Themes from "./options/themeSwitcher";

import GoalCounter from "./widgets/goals";

function Settings() {
  return (
    <>
      <h1>Settings</h1>

      <div className="settings">
        <div className="miscWidgets">
          <VolumeSlider />
          <GoalCounter />
        </div>

        <Themes />
      </div>
    </>
  );
}

export default Settings;
