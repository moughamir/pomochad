import { CaretCircleDown, CaretCircleUp } from "phosphor-react";
import { store, view } from "@risingstack/react-easy-state";
import { RadialProgress, timer } from "../timer";

// Desired goal i.e number of hours the user wants to be productive per day
const targetHours = store({
  val: 5,
});

if (localStorage.targetGoal) targetHours.val = localStorage.targetGoal;

// btns to increase and decrease hours
function ChangeHrsBtns() {
  function alterValues(a) {
    a == "add" ? targetHours.val++ : targetHours.val--;
    localStorage.targetGoal = targetHours.val;
  }

  return (
    <div className="adjustGoal">
      <CaretCircleUp
        className="changeHrsBtn"
        weight="fill"
        onClick={() => alterValues("add")}
      />
      <CaretCircleDown
        className="changeHrsBtn"
        weight="fill"
        onClick={() => alterValues("min")}
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
function getCurrentGoal() {
  return parseFloat(
    timer.todaysProgress /
      60,
  );
}

function minToHrs(num, fixed) {
  let re = new RegExp("^-?\\d+(?:\.\\d{0," + (fixed || -1) + "})?");
  return num.toString().match(re)[0];
}

function getCurrentProgress() {
  let progress = parseFloat(
    getCurrentGoal() / targetHours.val,
  );
  return Math.floor(progress * 100);
}

function CurrentProgress() {
  return (
    <div className="currentProgress">
      <RadialProgress
        value={getCurrentProgress()}
        text={`${minToHrs(getCurrentGoal(), 2)} hrs`}
        strokeWidth={5}
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
