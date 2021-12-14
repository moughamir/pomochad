import "./todos.css";
import Sidebar from "./sidebar";

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
