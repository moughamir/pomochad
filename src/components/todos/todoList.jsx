import { view } from "@risingstack/react-easy-state";
import { projects, todos } from "../../store";
import Todo from "./todo";

export default view(() => (
  <div className="todolist">
    {todos.list.map((item) => (
      (item.project == projects.clickedProject) &&
      <Todo name={item.name} note={item.note} />
    ))}
  </div>
));
