import { el } from "../lib/dom"
import delIcon from "/delete.svg"
import editIcon from "/edit.svg"
import checkedIcon from "/checked.svg"
import uncheckedIcon from "/unchecked.svg"
import { format, parseISO } from "date-fns"

export function TodoItem(todo) {
  let checkbox = el("img.checkbox", {
    src: todo.completed ? checkedIcon : uncheckedIcon,
    checkbox: true,
  })

  return el("div.todo-item", { "data-id": todo.id }, [
    checkbox,
    el("div", [
      el("div.todo-title", [`${todo.title}`]),
      el("div.todo-desc", [`${todo.desc}`]),
      el("div.todo-due", [
        el(`span.priority.${todo.priority.toLowerCase()}`, [
          todo.priority.toLowerCase(),
        ]),
        `${todo.dueDate ? format(parseISO(todo.dueDate), "M/d/yy") : ""}`,
      ]),
    ]),
    el("div.item-buttons", [
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
