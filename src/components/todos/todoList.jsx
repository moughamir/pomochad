import { view } from "@risingstack/react-easy-state";
import { todos } from "../../store";
import Todo from "./todo";

export default view(() => (
  <div className="todolist">
    {todos.list.map((item) => <Todo name={item.name} note={item.note} />)}
  </div>
));
