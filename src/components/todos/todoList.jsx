import { view } from "@risingstack/react-easy-state";
import { projects, todos } from "../../store";
import Todo from "./todo";

export default view(() => (
  <div className="todolist">
    {todos.list.map((item) => {
      // show important todos only
      if (projects.clickedProject == "Important") {
        if (item.priority == "high") {
          return <Todo name={item.name} note={item.note} />;
        }
      } // show all todos
      else {
        if (item.project == projects.clickedProject) {
          return <Todo name={item.name} note={item.note} />;
        }
      }
    })}
  </div>
));
