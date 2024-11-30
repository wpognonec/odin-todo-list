import { el } from "../lib/dom"
import delIcon from "/delete.svg"

export function TodoItem(todo) {
  let checkbox = el("input", {
    type: "checkbox",
    checkbox: true,
    checked: todo.completed ? true : false,
  })
  return el("div.todo-item", { "data-id": todo.id }, [
    checkbox,
    el("div", [
      el("div.todo-title", [`${todo.title}`]),
      el("div.todo-desc", [`${todo.desc}`]),
      el("div.todo-due", [`${todo.dueDate}`]),
    ]),
    el("img.delete", {
      src: delIcon,
      delete: true,
      width: "24px",
      height: "24px",
    }),
  ])
}
