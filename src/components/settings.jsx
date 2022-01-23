import VolumeSlider from "./options/volumeSlider";
import Themes from "./options/themeSwitcher";

import GoalCounter from "./widgets/goals";

function Settings() {
  return (
    <>
      <h1>Settings</h1>

      <main class="settings">
        <div class="miscWidgets">
          <VolumeSlider />
          <GoalCounter />
        </div>

        <Themes />
      </main>
    </>
  );
}

export default Settings;
