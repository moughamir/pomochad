import { store } from "@risingstack/react-easy-state";

// projects on sidebar
const projects = store({
  clickedProject: "Today",
  showInputBox: false,
  list: [],
});

if (localStorage.projects) {
  let tmp = localStorage.projects;
  projects.list = tmp.split(",");
}

// todos
const todos = store({
  list: [],
});

if (localStorage.todos) {
  todos.list = JSON.parse(localStorage.todos);
}

// user volume

const volume = store({
  value: 90,
});

if (localStorage.volume) {
  volume.value = localStorage.volume;
}

export { projects, todos, volume };
