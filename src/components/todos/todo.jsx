import { view } from "@risingstack/react-easy-state";
import { CheckCircle, Circle, XCircle } from "phosphor-react";
import { todos } from "../../store";

const FinishedStatus = (todoname, action, val) => {
  for (let i = 0; i < todos.list.length; i++) {
    if (todos.list[i].name == todoname) {
      if (action == "set") {
        todos.list[i].finished = val;
        break;
      }
      return todos.list[i].finished;
    }
  }
};

export default view((props) => (
  <div className="todo">
    <div
      className={FinishedStatus(props.name, "get")
        ? "todoTitle checkedTodo"
        : "todoTitle"}
    >
      {props.name}
    </div>
    <div
      className={FinishedStatus(props.name, "get")
        ? "todoNote checkedTodo"
        : "todoNote"}
    >
      {props.note}
    </div>

    <div className="todoBtns">
      {!FinishedStatus(props.name, "get")
        ? (
          <Circle
            weight="bold"
            size={20}
            onClick={() => FinishedStatus(props.name, "set", true)}
            className="unchecked"
          />
        )
        : (
          <CheckCircle
            weight="fill"
            size={20}
            onClick={() => FinishedStatus(props.name, "set", false)}
            className="checked"
          />
        )}
      <XCircle weight="fill" size={20} className="closeTodoBtn" />
    </div>
  </div>
));
