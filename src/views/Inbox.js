import { TodoList } from "../components/TodoList"
import { mount } from "../lib/dom"
import AbstractTodos from "./AbstractTodos"

export default class Inbox extends AbstractTodos {
  updateTodoList() {
    const element = TodoList(this.todos.getAll())
    this.todoList.textContent = ""
    mount(this.todoList, element)
  }
}
