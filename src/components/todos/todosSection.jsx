import TodoCreator from "./todoCreator";
import TodoList from "./todoList";
import { RemoveAllTodos } from "./todoBtns";
import { projects } from "../../store";
import { view } from "@risingstack/react-easy-state";

export default view(() => (
  <main class="todoSection">
    <TodoList />

    <div class="todoFooter">
      {(projects.clickedProject != "Important" &&
        projects.clickedProject != "Low priority") &&
        (
          <>
            <RemoveAllTodos />
            <TodoCreator />
          </>
        )}
    </div>
  </main>
));
