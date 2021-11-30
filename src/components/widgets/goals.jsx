import { CaretCircleDown, CaretCircleUp } from "phosphor-react";

// Desired goal i.e number of hours the user wants to be productive per day
let hours = 8;

function ProjectedGoal() {
  return (
    <div className="projectedGoal">
      <h3>Target Goal</h3>

      <div className="based">
        <div className="projectedGoalText">
          {hours}
        </div>

        <div className="adjustGoal">
          <CaretCircleUp weight="fill" />
          <CaretCircleDown weight="fill" />
        </div>
      </div>
    </div>
  );
}

function GoalCounter() {
  return (
    <div className="goalWidgets">
      <ProjectedGoal />
    </div>
  );
}

export default GoalCounter;
