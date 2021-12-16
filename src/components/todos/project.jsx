// basically project name on the sidebar

import { XCircle } from "phosphor-react";
import { store, view } from "@risingstack/react-easy-state";
import { projects } from "../../store";

const project = store({
  name: "",
});

function getColor(x) {
  return `var(--${x})`;
}

function removeProject(item) {
  const index = projects.list.indexOf(item);
  projects.list.splice(index, 1);
}

export default view((props) => (
  <button
    className={project.name == props.name
      ? "todoProject todoProjectClicked"
      : "todoProject"}
    onClick={() => project.name = props.name}
  >
    <div className="projectName">
      <props.icon
        size={20}
        style={{ color: getColor(props.color) }}
      />
      {props.name}
    </div>

    {/*show delete icon on user added todos only!*/}

    {(project.name == props.name && props.name != "Today" &&
      props.name != "Important") &&
      (
        <XCircle
          size={20}
          weight="fill"
          style={{ color: "var(--red)" }}
          onClick={() => removeProject(props.name)}
        />
      )}
  </button>
));
