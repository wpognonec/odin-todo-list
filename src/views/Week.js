import { TodoList } from "../components/TodoList"
import { mount } from "../lib/dom"
import AbstractTodos from "./AbstractTodos"

export default class Week extends AbstractTodos {
  updateTodoList() {
    const element = TodoList(this.todos.getWeek(), "Week")
    document.querySelector(".todo-list")?.remove()
    mount(this.todoList, element)
  }
}
