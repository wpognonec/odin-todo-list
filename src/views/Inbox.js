import { TodoList } from "../components/TodoList"
import { mount } from "../lib/dom"
import AbstractTodos from "./AbstractTodos"

export default class Inbox extends AbstractTodos {
  // constructor() {
  //   super()
  // }
  updateTodoList() {
    const element = TodoList(this.todos.getAll(), this.title)
    this.todoList.textContent = ""
    mount(this.todoList, element)
  }
}
