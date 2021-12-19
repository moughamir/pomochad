import Sidebar from "./sidebar";
import TodoCreator, { Todo } from "./todo";
import "../../css/todos/todos.css";

function TodoList() {
  return (
    <div className="todolist">
      <Todo />
      <Todo />
      <Todo />
      <Todo />
      <Todo />
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
