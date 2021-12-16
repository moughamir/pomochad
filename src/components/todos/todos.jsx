import Sidebar from "./sidebar";

import "../../css/todos/todos.css";
import { PlusCircle } from "phosphor-react";

function TodoList() {
  return (
    <div className="todoslist">
    </div>
  );
}

function TodoSection() {
  return (
    <div className="todoSection">
      <TodoList />
      <div className="todoFooter">
        <button>
          <PlusCircle size={24} weight="fill" /> todo
        </button>
      </div>
    </div>
  );
}

export default () => {
  return (
    <div className="todosPage">
      <Sidebar />
      <TodoSection />
    </div>
  );
};
