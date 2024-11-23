import "./reset.css"
import "./style.css"
import TodoItem from "./components/TodoItem"
import { mount } from "./lib/dom"
import Todos from "./models/todos"

const app = document.querySelector("#app")

let todos = Todos.getAll()

todos.forEach((todo) => {
  const todoEl = new TodoItem(todo)
  mount(app, todoEl)
})
