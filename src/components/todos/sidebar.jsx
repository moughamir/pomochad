import "./sidebar.css";

import { useState } from "preact/hooks";

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
      <button className="todoProject">
        <Notepad size={20} style={{ color: "var(--blue)" }} />Today
      </button>

      <button className="todoProject">
        <Fire size={20} style={{ color: "var(--red)" }} />Important
      </button>
    </div>
  );
}

function Project(props) {
  let [activeBtn, setActiveBtn] = useState("None");

  return (
    <button
      className={activeBtn == props.name
        ? "todoProject todoProjectClicked"
        : "todoProject"}
      onClick={() => setActiveBtn(props.name)}
    >
      <div className="projectName">
        <FireSimple
          size={20}
        />
        {props.name}
      </div>

      <XCircle size={20} weight="fill" style={{ color: "var(--red)" }} />
    </button>
  );
}

function ProjectLists() {
  return (
    <div className="projectLists">
      {projects.list.map((item) => <Project name={item} />)}
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
