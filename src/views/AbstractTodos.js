import { TodoForm } from "../components/TodoForm"
import { el, mount } from "../lib/dom"
import Todos from "../models/todos"

export default class AbstractTodos {
  constructor(root, title, projectId) {
    this.root = root
    this.title = title
    this.projectId = projectId
    this.editingId = 0
    this.todos = Todos
    this.todoList = el("div.todoList")
    this.todoForm = TodoForm(projectId)
    this.addTodoButton = document.querySelector("#addTodoButton")
    this.updateTodoList()
    this.addEventListeners()
    mount(this.root, this.todoList)
    mount(this.root, this.todoForm)
  }
  updateTodoList() {}
  addEventListeners() {
    this.todoList.addEventListener("click", (e) => {
      if (e.target.hasAttribute("checkbox")) {
        let id = e.target.closest("[data-id]").dataset.id
        this.todos.toggleComplete(id)
        this.updateTodoList()
      }
      if (e.target.hasAttribute("delete")) {
        let id =
          e.target.parentElement.parentElement.attributes["data-id"].value
        this.todos.delete(id)
        this.updateTodoList()
      }
      if (e.target.hasAttribute("edit")) {
        let id =
          e.target.parentElement.parentElement.attributes["data-id"].value
        let todo = this.todos.get(id)
        this.editingId = id
        document.querySelector("#title").value = todo.title
        document.querySelector("#desc").value = todo.desc
        document.querySelector("#dueDate").value = todo.dueDate
        document.querySelector("#priority").value = todo.priority
        this.todoForm.showModal()
      }
      if (e.target.hasAttribute("add")) {
        this.todoForm.showModal()
        console.log(this.todoForm.getAttribute("projectId"))
      }
    })
    this.todoForm.addEventListener("submit", (e) => {
      const formData = new FormData(e.target)
      let todo = {}
      formData.forEach((v, k) => (todo[k] = v))
      todo.projectId = this.projectId
      if (this.editingId) todo.id = this.editingId
      this.editingId = 0
      this.todos.save(todo)
      this.updateTodoList()
      this.todoForm.close()
    })
    this.todoForm.addEventListener("close", () => {
      this.editingId = 0
      document.querySelector("form").reset()
    })
  }
}
