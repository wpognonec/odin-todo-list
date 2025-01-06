import { TodoList } from "../components/TodoList"
import { mount } from "../lib/dom"
import AbstractTodos from "./AbstractTodos"

export default class Inbox extends AbstractTodos {
  updateTodoList() {
    const element = TodoList(this.todos.getAll(), this.title)
    document.querySelector(".todo-list")?.remove()
    mount(this.todoList, element)
  }
}
