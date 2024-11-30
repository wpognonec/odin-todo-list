import { TodoList } from "../components/TodoList"
import { TodoForm } from "../components/TodoForm"
import { el, mount } from "../lib/dom"
import Todos from "../models/todos"

export default class Inbox {
  constructor(root) {
    this.root = root
    this.root.textContent = "Inbox"
    this.todoList = el("div.todoList")
    this.todoForm = TodoForm()
    this.addTodoButton = document.querySelector("#addTodoButton")
    this.updateTodoList()
    this.addEventListeners()
    mount(this.root, this.todoList)
    mount(this.root, this.todoForm)
  }
  updateTodoList() {
    let todos = Todos.getAll()
    const element = TodoList(todos)
    this.todoList.textContent = ""
    mount(this.todoList, element)
  }
  showDialog() {
    const dialog = document.querySelector("#addTodoDialog")
    dialog.showModal()
  }
  addEventListeners() {
    this.todoList.addEventListener("click", (e) => {
      if (e.target.hasAttribute("checkbox")) {
        let id = e.target.parentElement.attributes["data-id"].value
        Todos.toggleComplete(id)
        this.updateTodoList()
      }
      if (e.target.hasAttribute("delete")) {
        let id = e.target.parentElement.attributes["data-id"].value
        Todos.delete(id)
        this.updateTodoList()
      }
    })

    this.addTodoButton.addEventListener("click", () => this.showDialog())
    this.todoForm.addEventListener("submit", (e) => {
      e.preventDefault()
      const formData = new FormData(e.target)
      let todo = {}
      formData.forEach((v, k) => (todo[k] = v))
      Todos.save(todo)
      this.updateTodoList()
      this.todoForm.close()
    })
  }
}
