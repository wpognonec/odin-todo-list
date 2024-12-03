import { el } from "../lib/dom"
import { TodoItem } from "./TodoItem"

export function TodoList(todos) {
  return el("div.wrapper", [
    el("button#addTodoButton", { add: true }, ["Add Todo"]),
    el(
      "div.todo-list",
      todos.map((todo) => TodoItem(todo))
    ),
  ])
}
