import { TodoForm } from "../components/TodoForm"
import { el, mount } from "../lib/dom"
import Todos from "../models/todos"
import Projects from "../models/projects"
import { ProjectList } from "../components/ProjectList"

export default class Index {
  constructor(root, title, projectId) {
    this.root = root
    this.title = title
    this.projectId = projectId
    this.editingId = 0
    this.projects = Projects
    this.todos = Todos
    this.todoList = el("div.tl-wrapper")
    this.projectList = el("div.pl-wrapper")
    this.todoForm = TodoForm(projectId)
    this.menu = document.querySelector("#menu")
    this.updateProjectList()
    this.updateTodoList()
    this.render()
    this.addEventListeners()
    document
      .querySelector(`a[data-id="${projectId}"]`)
      .classList.add("selected")
  }

  render() {
    document.querySelector(".pl-wrapper")?.remove()
    document.querySelector(".tl-wrapper")?.remove()
    document.querySelector("#addTodoDialog")?.remove()
    mount(this.root, this.todoForm)
    mount(this.root, this.todoList)
    mount(this.menu, this.projectList)
  }

  updateTodoList() {}

  updateProjectList() {
    const element = ProjectList(this.projects.getAll())
    document.querySelector(".project-list")?.remove()
    mount(this.projectList, element)
  }

  addEventListeners() {
    this.todoList.addEventListener("click", (e) => {
      if (e.target.hasAttribute("checkbox")) {
        let id = e.target.closest("[data-id]").dataset.id
        this.todos.toggleComplete(id)
        this.updateTodoList()
      }

      if (e.target.hasAttribute("delete")) {
        let id = e.target.closest("[data-id]").dataset.id
        this.todos.delete(id)
        this.updateTodoList()
      }

      if (e.target.hasAttribute("edit")) {
        let id = e.target.closest("[data-id]").dataset.id
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

    this.projectList.addEventListener("click", (e) => {
      if (e.target.hasAttribute("delete")) {
        let id = e.target.closest(".menu-button").attributes["data-id"].value
        this.projects.delete(id)
        location.reload()
      }
    })

    document.querySelector("#add-project").addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        let newProj = { name: e.target.value }
        Projects.save(newProj)
        e.target.value = ""
        this.updateProjectList()
      }
    })
  }
}
