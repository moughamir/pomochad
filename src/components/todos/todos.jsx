import "./todos.css";
import Sidebar from "./sidebar";

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
