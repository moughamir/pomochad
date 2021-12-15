import "./todos.css";
import Sidebar from "./sidebar";

function TodoList() {
  return (
    <div className="todoslist">
    </div>
  );
}

function TodoHeader() {
  return (
    <div className="todoheader">
      <h2>
        <span>Today</span>
      </h2>
    </div>
  );
}

function TodoSection() {
  return (
    <div className="todoSection">
      <TodoHeader />
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
