import { el } from "../lib/dom"
import { TodoItem } from "./TodoItem"

export function TodoList(todos, title) {
  return el("div.todo-list", [
    el("div", [title]),
    el("button#add-todo-button", { add: true }, ["Add Todo"]),
    el(
      "div",
      todos.map((todo) => TodoItem(todo))
    ),
  ])
}
