import { el } from "../lib/dom"
import { TodoItem } from "./TodoItem"
import addIcon from "/add.svg"

export function TodoList(todos, title) {
  return el("div.todo-list", [
    el("div.todo-list-title", [
      el("h2", [title]),
      el("img.add.item-buttons", {
        src: addIcon,
        add: true,
        width: "36px",
        height: "36px",
      }),
    ]),
    el(
      "div",
      todos.map((todo) => TodoItem(todo))
    ),
  ])
}
