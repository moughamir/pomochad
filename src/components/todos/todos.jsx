import "./todos.css";
import { Fire, Notepad, PlusCircle } from "phosphor-react";

function Sidebar() {
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

      <button className="newProjectBtn">
        <PlusCircle size={24} /> new project
      </button>
    </div>
  );
}

function TodoList() {
  return (
    <div className="todoslist">
      <div>
      </div>
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
