import { CaretCircleDown, CaretCircleUp } from "phosphor-react";
import { store, view } from "@risingstack/react-easy-state";
import { RadialProgress } from "../timer";

// Desired goal i.e number of hours the user wants to be productive per day
const targetHours = store({
  val: 5,
});

// btns to increase and decrease hours
function ChangeHrsBtns() {
  return (
    <div className="adjustGoal">
      <CaretCircleUp
        className="changeHrsBtn"
        weight="fill"
        onClick={() => targetHours.val++}
      />
      <CaretCircleDown
        className="changeHrsBtn"
        weight="fill"
        onClick={() => targetHours.val--}
      />
    </div>
  );
}

function ProjectedGoal(props) {
  return (
    <div className="projectedGoal">
      <h3>Target Goal</h3>

      <div className="projectedGoalContent">
        <div className="projectedGoalText">
          {props.hours} hrs
        </div>
        <ChangeHrsBtns />
      </div>
    </div>
  );
}

let currentProgress = 2;

function getCurrentProgress() {
  let progress = parseFloat(currentProgress / targetHours.val);
  return Math.floor(progress * 100);
}

function CurrentProgress() {
  return (
    <div className="currentProgress">
      <RadialProgress
        value={getCurrentProgress()}
        text={`${currentProgress} hrs`}
        strokeWidth={6}
      />
    </div>
  );
}

export default view(() => (
  <div className="goalWidgets">
    <ProjectedGoal hours={targetHours.val} />
    <CurrentProgress />
  </div>
));
