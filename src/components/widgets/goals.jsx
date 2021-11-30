import { CaretCircleDown, CaretCircleUp } from "phosphor-react";
import { store, view } from "@risingstack/react-easy-state";

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

export default view(() => (
  <div className="goalWidgets">
    <ProjectedGoal hours={targetHours.val} />
  </div>
));
