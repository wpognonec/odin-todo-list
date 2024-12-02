import { TodoList } from "../components/TodoList"
import { TodoForm } from "../components/TodoForm"
import { el, mount } from "../lib/dom"
import Todos from "../models/todos"

export default class Project {
  constructor(root) {
    this.root = root
    this.root.textContent = "Project"
    this.todoList = el("div.todoList")
    mount(this.root, this.todoList)
    this.updateTodoList()
    this.createModal()
  }
  updateTodoList() {
    let todos = Todos.getAll()
    const element = TodoList(todos)
    this.todoList.textContent = ""
    mount(this.todoList, element)
  }
  createModal() {
    const todoForm = TodoForm()
    const addTodoButton = document.querySelector("#addTodoButton")
    addTodoButton.addEventListener("click", () => this.showDialog())
    todoForm.addEventListener("submit", (e) => {
      e.preventDefault()
      const formData = new FormData(e.target)
      let todo = {}
      formData.forEach((v, k) => (todo[k] = v))
      Todos.save(todo)
      this.updateTodoList()
      todoForm.close()
    })
    this.root.appendChild(todoForm)
  }
  showDialog() {
    const dialog = document.querySelector("#addTodoDialog")
    dialog.showModal()
  }
}
