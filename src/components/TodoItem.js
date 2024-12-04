import { el } from "../lib/dom"
import delIcon from "/delete.svg"
import editIcon from "/edit.svg"
import { format, parseISO } from "date-fns"

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
      el("div.todo-due", [
        `${todo.dueDate ? format(parseISO(todo.dueDate), "ccc, MMM d") : ""}`,
      ]),
    ]),
    el("div.itemButtons", [
      el("img.edit", {
        src: editIcon,
        edit: true,
        width: "24px",
        height: "24px",
      }),
      el("img.delete", {
        src: delIcon,
        delete: true,
        width: "24px",
        height: "24px",
      }),
    ]),
  ])
}
