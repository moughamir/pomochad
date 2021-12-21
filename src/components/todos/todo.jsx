import { view } from "@risingstack/react-easy-state";
import { BookmarkSimple, CheckCircle, Circle, XCircle } from "phosphor-react";
import { todos } from "../../store";

const FinishedStatus = (todoname, action, val) => {
  for (let i = 0; i < todos.list.length; i++) {
    if (todos.list[i].name == todoname) {
      if (action == "set") {
        todos.list[i].finished = val;
        localStorage.setItem("todos", JSON.stringify(todos.list));
      }
      return todos.list[i].finished;
    }
  }
};

const removeTodo = (name) => {
  todos.list.forEach((todo, i) => {
    if (todo.name == name) {
      todos.list.splice(i, 1);
      localStorage.setItem("todos", JSON.stringify(todos.list));
    }
  });
};

export default view((props) => (
  <div class="todo">
    <div
      class={FinishedStatus(props.name, "get")
        ? "todoTitle checkedTodo"
        : "todoTitle"}
    >
      {props.name}
    </div>
    <div
      class={FinishedStatus(props.name, "get") ? "todoNote checkedTodo"
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
              class="unchecked"
            />
          )
          : (
            <CheckCircle
              weight="fill"
              size={20}
              onClick={() => FinishedStatus(props.name, "set", false)}
              class="checked"
            />
          )}
        <XCircle
          weight="fill"
          size={20}
          class="closeTodoBtn"
          onClick={() => removeTodo(props.name)}
        />
      </div>

      {(props.priority == "high") &&
        (
          <BookmarkSimple
            weight="fill"
            size={20}
            style={{ color: "var(--green)" }}
          />
        )}
    </div>
  </div>
));
