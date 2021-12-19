import { store } from "@risingstack/react-easy-state";

export const projects = store({
  clickedProject: "Today",
  showInputBox: false,
  list: [],
});

export const todos = store({
  list: [],
});
