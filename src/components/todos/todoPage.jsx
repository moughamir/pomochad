import Sidebar from "./sidebar";
import TodoSection from "./todoSection";
import "../../css/todos/todos.css";

export default function () {
  return (
    <div class="todosPage">
      <Sidebar />
      <TodoSection />
    </div>
  );
}
