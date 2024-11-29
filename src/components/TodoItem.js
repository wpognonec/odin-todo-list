import { el } from "../lib/dom"

export function TodoItem(todo) {
  let checkbox
  if (todo.completed) {
    checkbox = el("input", {
      type: "checkbox",
      "data-id": todo.id,
      checked: "",
    })
  } else {
    checkbox = el("input", { type: "checkbox", "data-id": todo.id })
  }
  return el("div.todo-item", [
    checkbox,
    el("div", [
      el("div.todo-title", [`${todo.title}`]),
      el("div.todo-desc", [`${todo.desc}`]),
      el("div.todo-due", [`${todo.dueDate}`]),
    ]),
  ])
}
