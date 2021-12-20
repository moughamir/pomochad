import { view } from "@risingstack/react-easy-state";
import { BookmarkSimple, CheckCircle, Circle, XCircle } from "phosphor-react";
import { todos } from "../../store";

const FinishedStatus = (todoname, action, val) => {
  for (let i = 0; i < todos.list.length; i++) {
    if (todos.list[i].name == todoname) {
      if (action == "set") {
        todos.list[i].finished = val;
        localStorage.setItem("todos", JSON.stringify(todos.list));
        break;
      }
      return todos.list[i].finished;
    }
  }
};

const removeTodo = (name) => {
  for (let i = 0; i < todos.list.length; i++) {
    if (todos.list[i].name == name) {
      let index = i;
      todos.list.splice(index, 1);
      localStorage.setItem("todos", JSON.stringify(todos.list));
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
      className={FinishedStatus(props.name, "get") ? "todoNote checkedTodo"
      : "todoNote"}
    >
      {props.note}
    </div>

    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <div>
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
        <XCircle
          weight="fill"
          size={20}
          className="closeTodoBtn"
          onClick={() => removeTodo(props.name)}
        />
      </div>

      {(props.priority == "high") &&
        <BookmarkSimple weight="fill" size={20} />}
    </div>
  </div>
));
