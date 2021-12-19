import { store } from "@risingstack/react-easy-state";

const projects = store({
  clickedProject: "Today",
  showInputBox: false,
  list: [],
});

if (localStorage.projects) {
  let tmp = localStorage.projects;
  projects.list = tmp.split(",");
}

const todos = store({
  list: [],
});

if (localStorage.todos) {
  todos.list = JSON.parse(localStorage.todos);
}

export { projects, todos };
