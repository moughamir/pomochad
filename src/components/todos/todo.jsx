import { store, view } from "@risingstack/react-easy-state";
import { CheckCircle, Circle, PlusCircle } from "phosphor-react";
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
  const [priority, setPriority] = useState("low");

  return (
    <div className="todoInput">
      <input placeholder="name" />
      <textarea placeholder="note"></textarea>

      <div style={{ display: "flex", gap: "1rem" }}>
        <div className="todoPriority">
          Important

          {priority == "low"
            ? (
              <Circle
                size={24}
                onClick={() => setPriority("high")}
                className="checkBtn"
              />
            )
            : (
              <CheckCircle
                size={24}
                onClick={() => setPriority("low")}
                weight="fill"
                className="checkBtn"
              />
            )}
        </div>
        <button onClick={() => inputbox.show = false}>
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
