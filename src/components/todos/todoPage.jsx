import Sidebar from "./sidebar";
import TodoCreator from "./todoCreator";
import TodoList from "./todoList";
import "../../css/todos/todos.css";

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
