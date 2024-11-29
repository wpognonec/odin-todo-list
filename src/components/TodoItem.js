import { el } from "../lib/dom"

export function TodoItem(todo) {
  let checkbox = el("input", {
    type: "checkbox",
    "data-id": todo.id,
    checkbox: true,
    checked: todo.completed ? true : false,
  })
  return el("div.todo-item", [
    checkbox,
    el("div", [
      el("div.todo-title", [`${todo.title}`]),
      el("div.todo-desc", [`${todo.desc}`]),
      el("div.todo-due", [`${todo.dueDate}`]),
    ]),
  ])
}
