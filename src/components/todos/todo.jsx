import { store, view } from "@risingstack/react-easy-state";
import { CheckCircle, Circle, PlusCircle, XCircle } from "phosphor-react";
import { todos } from "../../store";

import { useState } from "preact/hooks";

const inputbox = store({
  show: false,
  priority: "low",
});

function NewTodoBtn() {
  return (
    <button
      style={{ background: "var(--red)" }}
      onClick={() => inputbox.show = true}
    >
      <PlusCircle size={24} weight="fill" /> todo
    </button>
  );
}

function TodoInput() {
  let todo = { name: "", note: "", priority: "low" };

  function saveTodo(todo) {
    todos.list.push(todo);
    inputbox.show = false;
  }

  return (
    <div className="todoInput">
      <input placeholder="name" onChange={(e) => todo.name = e.target.value} />
      <textarea placeholder="note" onChange={(e) => todo.note = e.target.value}>
      </textarea>

      <div style={{ display: "flex", gap: "1rem" }}>
        <div class="todoPriority">
          <label for="priority">priority</label>

          <select id="priority" onClick={(e) => todo.priority = e.target.value}>
            <option value="low">low</option>
            <option value="high">high</option>
          </select>
        </div>

        <button onClick={() => saveTodo(todo)}>
          save
        </button>
      </div>
    </div>
  );
}

export function Todo(props) {
  const [checked, setChecked] = useState(false);

  return (
    <div className="todo">
      <div className={checked ? "todoTitle checkedTodo" : "todoTitle"}>
        {props.name}
      </div>
      <div className={checked ? "todoNote checkedTodo" : "todoNote"}>
        {props.note}
      </div>

      <div className="todoBtns">
        {!checked
          ? (
            <Circle
              weight="bold"
              size={20}
              onClick={() => setChecked(true)}
              className="unchecked"
            />
          )
          : (
            <CheckCircle
              weight="fill"
              size={20}
              onClick={() => setChecked(false)}
              className="checked"
            />
          )}
        <XCircle weight="fill" size={20} className="closeTodoBtn" />
      </div>
    </div>
  );
}
export default view(() => (
  <div className="todoCreator">
    {inputbox.show &&
      <TodoInput />}
    <NewTodoBtn />
  </div>
));
