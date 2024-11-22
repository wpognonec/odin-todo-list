import "./reset.css"
import "./style.css"
import Todo from "./models/todo"
import Project from "./models/project"
import todos from "./data/todos.json"
import TodoItem from "./components/TodoItem"
import { mount } from "./lib/dom"

const app = document.querySelector("#app")
const proj1 = new Project()

todos.forEach((todo) => proj1.addTodo(new Todo(todo)))

proj1.todos[0].title = "1"

proj1.todos.forEach((todo) => {
  const todoEl = new TodoItem(todo)
  mount(app, todoEl)
})
