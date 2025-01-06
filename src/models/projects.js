import { v4 as uuidv4 } from "uuid"
import Todos from "./todos"
// import Todo from "./todo"

class Projects {
  constructor() {
    this.projects = []
    const projectStore = JSON.parse(localStorage.getItem("projects") || "[]")
    projectStore.forEach((project) => {
      this.projects.push(new Project(project))
    })
  }
  getAll() {
    return this.projects
  }
  get(id) {
    return this.projects.find((p) => p.id === id)
  }
  save(project) {
    const projects = this.getAll()
    let exist = projects.find((p) => p.id === project.id)
    if (exist) {
      exist = project
    } else {
      if (!project.id) project.id = uuidv4()
      projects.push(new Project(project))
    }
    localStorage.setItem("projects", JSON.stringify(projects))
  }
  delete(id) {
    let tds = Todos.getAll(id)
    tds.forEach((td) => Todos.delete(td.id))
    this.projects = this.projects.filter((project) => project.id !== id)
    localStorage.setItem("projects", JSON.stringify(this.projects))
  }
}

class Project {
  constructor(project) {
    this.id = project.id
    this.name = project.name
  }
}

export default new Projects()
