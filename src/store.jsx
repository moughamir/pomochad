import { store } from "@risingstack/react-easy-state";

export const projects = store({
  showInputBox: false,
  list: [],
});

export const todos = store({
  list: [],
});
