import "./reset.css"
import "./style.css"
import { createTodo } from "./components/Todo"

const app = document.querySelector("#app")

const todo1 = {
  title: 1,
}
const todo2 = {
  title: 2,
}
const todo1el = createTodo(todo1)
const todo2el = createTodo(todo2)
app.appendChild(todo1el)
app.appendChild(todo2el)
