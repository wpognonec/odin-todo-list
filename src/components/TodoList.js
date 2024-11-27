import { el } from "../lib/dom"
import { TodoItem } from "./TodoItem"

export function TodoList(todos) {
  return el(
    "div",
    todos.map((todo) => TodoItem(todo))
  )
}
