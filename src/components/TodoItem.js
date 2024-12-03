import { el } from "../lib/dom"
import delIcon from "/delete.svg"
import { format } from "date-fns"

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
      el("div.todo-due", [`${format(todo.dueDate, "PP")}`]),
    ]),
    el("img.delete", {
      src: delIcon,
      delete: true,
      width: "24px",
      height: "24px",
    }),
  ])
}
