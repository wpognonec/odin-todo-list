import { el } from "../lib/dom"

export function TodoItem(todo) {
  return el("div.todo-item", [
    el("input", { type: "checkbox" }),
    el("div", [
      el("div.todo-title", [`${todo.title}`]),
      el("div.todo-desc", [`${todo.desc}`]),
      el("div.todo-due", [`${todo.dueDate}`]),
    ]),
  ])
}

// export default class TodoItem {
//   constructor(todo) {
//     this.el = el("div", [`${todo.title}`])
//   }
// }
