import { TodoList } from "../components/TodoList"
import { mount } from "../lib/dom"
import AbstractTodos from "./AbstractTodos"
import Projects from "../models/projects"

export default class Project extends AbstractTodos {
  updateTodoList() {
    const project = Projects.get(this.projectId)
    const element = TodoList(this.todos.getAll(this.projectId), project.name)
    this.todoList.textContent = ""
    mount(this.todoList, element)
  }
}
