import "../../css/todos/sidebar.css";

import { PlusCircle, XCircle } from "phosphor-react";
import { view } from "@risingstack/react-easy-state";

import { projects } from "../../store";
import ProjectLists from "./projectList";

function showInput(tmp) {
  projects.showInputBox = (tmp) ? true : false;
}

// input field for adding new projects
function ProjectInput() {
  let tmpProject;

  function addProject() {
    if (!tmpProject || projects.list.includes(tmpProject)) {
      alert("invalid project name!");
      return;
    }

    projects.list.push(tmpProject);
    localStorage.setItem("projects", projects.list);
    showInput(false);
  }

  return (
    <form action="" method="get" class="projectInput">
      <input
        type="text"
        placeholder="project name"
        maxLength={17}
        onChange={(e) => tmpProject = e.target.value}
      />

      <div class="projectInputBtns">
        <button onClick={() => addProject()}>
          save
        </button>

        <XCircle
          class="closeProjectInput"
          size={20}
          weight="fill"
          onClick={() => showInput(false)}
        />
      </div>
    </form>
  );
}

export default view(() => (
  <div class="sidebar">
    <div class="projects">
      <ProjectLists />
    </div>

    <div style={{ position: "relative" }}>
      {projects.showInputBox &&
        <ProjectInput closeInput={() => showInput(false)} />}

      <button class="newProjectBtn" onClick={() => showInput(true)}>
        <PlusCircle size={21} weight="fill" /> Add Project
      </button>
    </div>
  </div>
));
