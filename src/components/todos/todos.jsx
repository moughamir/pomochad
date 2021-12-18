import Sidebar from "./sidebar";
import TodoCreator from "./todo";

import "../../css/todos/todos.css";

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
        <TodoCreator />
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
