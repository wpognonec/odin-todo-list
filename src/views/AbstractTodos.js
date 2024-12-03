import { TodoForm } from "../components/TodoForm"
import { el, mount } from "../lib/dom"
import Todos from "../models/todos"

export default class AbstractTodos {
  constructor(root, title, projectId) {
    this.root = root
    this.root.textContent = title
    this.projectId = projectId
    this.todos = Todos
    this.todoList = el("div.todoList")
    this.todoForm = TodoForm(projectId)
    this.addTodoButton = document.querySelector("#addTodoButton")
    this.updateTodoList()
    this.addEventListeners()
    mount(this.root, this.todoList)
    mount(this.todoList, this.todoForm)
  }
  updateTodoList() {}
  addEventListeners() {
    this.todoList.addEventListener("click", (e) => {
      if (e.target.hasAttribute("checkbox")) {
        let id = e.target.parentElement.attributes["data-id"].value
        this.todos.toggleComplete(id)
        this.updateTodoList()
      }
      if (e.target.hasAttribute("delete")) {
        let id = e.target.parentElement.attributes["data-id"].value
        this.todos.delete(id)
        this.updateTodoList()
      }
      if (e.target.hasAttribute("add")) {
        this.todoForm.showModal()
        console.log(this.todoForm.getAttribute("projectId"))
      }
    })
    this.todoForm.addEventListener("submit", (e) => {
      e.preventDefault()
      const formData = new FormData(e.target)
      let todo = {}
      formData.forEach((v, k) => (todo[k] = v))
      todo.projectId = this.projectId
      this.todos.save(todo)
      this.updateTodoList()
      this.todoForm.close()
    })
  }
}
