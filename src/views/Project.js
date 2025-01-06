import { TodoList } from "../components/TodoList"
import { mount } from "../lib/dom"
import AbstractTodos from "./AbstractTodos"

export default class Project extends AbstractTodos {
  updateTodoList() {
    const element = TodoList(this.todos.getAll(this.projectId), this.title)
    document.querySelector(".todo-list")?.remove()
    mount(this.todoList, element)
  }
}
