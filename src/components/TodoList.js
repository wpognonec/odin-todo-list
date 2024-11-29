import { el } from "../lib/dom"
import { TodoItem } from "./TodoItem"

export function TodoList(todos) {
  return el(
    "div.todo-list",
    todos.map((todo) => TodoItem(todo))
  )
}
