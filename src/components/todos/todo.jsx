import { store, view } from "@risingstack/react-easy-state";
import { CheckCircle, Circle, PlusCircle } from "phosphor-react";
import { useState } from "preact/hooks";

const inputbox = store({
  show: false,
  priority: "low",
});

const todos = store({
  list: [],
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
  const [priority, setPriority] = useState("low");

  let todo = { name: "", note: "", priority: "" };

  function changePriority(val) {
    setPriority(val);
    todo.priority = val;
    console.log(todo.priority);
  }

  function saveTodo(todo) {
    todos.list.push(todo);
    inputbox.show = false;
    console.log(todos.list);
  }

  return (
    <div className="todoInput">
      <input placeholder="name" onChange={(e) => todo.name = e.target.value} />
      <textarea placeholder="note" onChange={(e) => todo.note = e.target.value}>
      </textarea>

      <div style={{ display: "flex", gap: "1rem" }}>
        <div className="todoPriority">
          Important

          {priority == "low"
            ? (
              <Circle
                size={24}
                onClick={() => changePriority("high")}
                className="checkBtn"
              />
            )
            : (
              <CheckCircle
                size={24}
                onClick={() => changePriority("low")}
                weight="fill"
                className="checkBtn"
              />
            )}
        </div>
        <button onClick={() => saveTodo(todo)}>
          save
        </button>
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
