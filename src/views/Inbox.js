import { TodoItem } from "../components/TodoItem"
import { TodoForm } from "../components/TodoForm"
import { el } from "../lib/dom"
import Todos from "../models/todos"

// let todos = Todos.getAll()

// const todoForm = TodoForm()
// todoForm.addEventListener("submit", (e) => {
//   e.preventDefault()
//   const formData = new FormData(todoForm)
//   let todo = {}
//   formData.forEach((v, k) => (todo[k] = v))
//   Todos.save(todo)
// })

// const element = el("div", [...todos.map((todo) => TodoItem(todo)), todoForm])

// export default () => element

export default class Inbox {
  constructor(root) {
    this.root = root
    this.root.textContent = "test"
  }
  updateTodoList() {
    let todos = Todos.getAll()
    const todoForm = TodoForm()
    const element = el("div", [
      ...todos.map((todo) => TodoItem(todo)),
      todoForm,
    ])
    this.root.appendChild(element)
  }
}
