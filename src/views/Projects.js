import { TodoList } from "../components/TodoList"
import { mount, el } from "../lib/dom"
import AbstractTodos from "./AbstractTodos"
import Project from "./Project"
import Projects from "../models/projects"

export default class ProjectsView {
  constructor(root) {
    this.projects = Projects.getAll()
    this.projectList = el("div#projectList")
    this.projects.forEach((project) => {
      mount(this.projectList, new Project(project.projectId))
    })
    mount(root, this.projectList)
  }

  updateTodoList() {
    const element = TodoList(this.todos.getAll(this.projectId))
    this.todoList.textContent = ""
    mount(this.todoList, element)
  }
}
