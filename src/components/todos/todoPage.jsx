import Sidebar from "./sidebar";
import TodoCreator from "./todoCreator";
import TodoList from "./todoList";
import "../../css/todos/todos.css";

function TodoSection() {
  return (
    <div class="todoSection">
      <TodoList />
      <div class="todoFooter">
        <TodoCreator />
      </div>
    </div>
  );
}

export default () => {
  return (
    <div class="todosPage">
      <Sidebar />
      <TodoSection />
    </div>
  );
};
