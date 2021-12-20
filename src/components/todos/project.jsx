// basically project name on the sidebar

import { XCircle } from "phosphor-react";
import { view } from "@risingstack/react-easy-state";
import { projects } from "../../store";

function getColor(x) {
  return `var(--${x})`;
}

function removeProject(item) {
  const index = projects.list.indexOf(item);
  projects.list.splice(index, 1);
  localStorage.setItem("projects", projects.list);
}

export default view((props) => (
  <div
    className={projects.clickedProject == props.name
      ? "todoProject todoProjectClicked"
      : "todoProject"}
    onClick={() => projects.clickedProject = props.name}
  >
    <div className="projectName">
      <props.icon
        size={20}
        style={{ color: getColor(props.color) }}
      />
      {props.name}
    </div>

    {/*show delete icon on user added todos only!*/}

    {(projects.clickedProject == props.name && props.name != "Today" &&
      props.name != "Important" && props.name != "Low priority") &&
      (
        <XCircle
          size={20}
          weight="fill"
          style={{ color: "var(--red)" }}
          onClick={() => removeProject(props.name)}
        />
      )}
  </div>
));
