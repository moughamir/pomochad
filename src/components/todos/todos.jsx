import { useState } from "preact/hooks";

import "./todos.css";
import { Fire, Notepad, PlusCircle, XCircle } from "phosphor-react";

function ProjectInput(props) {
  return (
    <div className="projectInput">
      <input type="text" placeholder="project name" />

      <div className="projectInputBtns">
        <button>save</button>

        <XCircle
          className="closeProjectInput"
          size={20}
          weight="fill"
          onClick={props.closeInput}
        />
      </div>
    </div>
  );
}

function Sidebar() {
  let [showInput, setInput] = useState(false);

  return (
    <div className="sidebar">
      <div className="todoProjects">
        <button className="todoProject">
          <Notepad size={25} style={{ color: "var(--blue)" }} /> Today
        </button>

        <button className="todoProject">
          <Fire size={25} style={{ color: "var(--red)" }} /> Important
        </button>
      </div>

      <div style={{ position: "relative" }}>
        {showInput && <ProjectInput closeInput={() => setInput(false)} />}

        <button className="newProjectBtn" onClick={() => setInput(true)}>
          <PlusCircle size={24} /> new project
        </button>
      </div>
    </div>
  );
}

function TodoList() {
  return (
    <div className="todoslist">
    </div>
  );
}

export default () => {
  return (
    <div className="todosPage">
      <Sidebar />
      <TodoList />
    </div>
  );
};
