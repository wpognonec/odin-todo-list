// import { TodoList } from "../components/TodoList"
import { TodoForm } from "../components/TodoForm"
import { el, mount } from "../lib/dom"
import Todos from "../models/todos"

export default class AbstractTodos {
  constructor(root) {
    this.root = root
    this.todos = Todos
    this.todoList = el("div.todoList")
    this.todoForm = TodoForm()
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
        let id = e.target.parentElement.attributes["data-id"].value
        this.todos.toggleComplete(id)
        this.updateTodoList()
      }
      if (e.target.hasAttribute("delete")) {
        let id = e.target.parentElement.attributes["data-id"].value
        this.todos.delete(id)
        this.updateTodoList()
      }
    })
    this.addTodoButton.addEventListener("click", () =>
      this.todoForm.showModal()
    )
    this.todoForm.addEventListener("submit", (e) => {
      e.preventDefault()
      const formData = new FormData(e.target)
      let todo = {}
      formData.forEach((v, k) => (todo[k] = v))
      this.todos.save(todo)
      this.updateTodoList()
      this.todoForm.close()
    })
  }
}
