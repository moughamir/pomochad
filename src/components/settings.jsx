import VolumeSlider from "./options/volumeSlider";
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
      </main>
    </>
  );
}

export default Settings;
