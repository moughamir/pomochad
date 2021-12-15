import "./sidebar.css";

import Project from "./project";

import { Fire, FireSimple, Notepad, PlusCircle, XCircle } from "phosphor-react";
import { store, view } from "@risingstack/react-easy-state";

export const projects = store({
  showInputBox: false,
  list: [],
});

function showInput(tmp) {
  projects.showInputBox = (tmp) ? true : false;
}

// input field for adding new projects
function ProjectInput() {
  let tmpProject;

  function addProject() {
    projects.list.push(tmpProject);
    showInput(false);
  }

  return (
    <div className="projectInput">
      <input
        type="text"
        placeholder="project name"
        onChange={(e) => tmpProject = e.target.value}
      />

      <div className="projectInputBtns">
        <button onClick={() => addProject()}>
          save
        </button>

        <XCircle
          className="closeProjectInput"
          size={20}
          weight="fill"
          onClick={() => showInput(false)}
        />
      </div>
    </div>
  );
}

function DefaultProjects() {
  return (
    <div className="DefaultProjects">
      <Project name="Today" icon={Notepad} color="blue" />
      <Project name="Important" icon={Fire} color="red" />
    </div>
  );
}

function ProjectLists() {
  return (
    <div className="projectLists">
      {projects.list.map((item) => <Project name={item} icon={FireSimple} />)}
    </div>
  );
}

export default view(() => (
  <div className="sidebar">
    <div className="projects">
      <DefaultProjects />
      <ProjectLists />
    </div>

    <div style={{ position: "relative" }}>
      {projects.showInputBox && (
        <ProjectInput closeInput={() => showInput(false)} />
      )}

      <button className="newProjectBtn" onClick={() => showInput(true)}>
        <PlusCircle size={24} /> add project
      </button>
    </div>
  </div>
));
