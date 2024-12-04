import { el } from "../lib/dom"
import { TodoItem } from "./TodoItem"

export function TodoList(todos) {
  return el("div.todo-list", [
    el("button#addTodoButton", { add: true }, ["Add Todo"]),
    el(
      "div",
      todos.map((todo) => TodoItem(todo))
    ),
  ])
}
