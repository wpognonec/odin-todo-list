import { v4 as uuidv4 } from "uuid"
import { addDays } from "date-fns"

class Todos {
  constructor() {
    this.todos = []
    const todoStore = JSON.parse(localStorage.getItem("todos") || "[]")
    todoStore.forEach((todo) => {
      this.todos.push(new Todo(todo))
    })
  }
  getAll(projectId) {
    if (!projectId) return this.todos
    else return this.todos.filter((todo) => todo.projectId === projectId)
  }
  getWeek() {
    const date = new Date()
    const day = date.getDay()
    const start = addDays(date, day - 4)
    const end = addDays(date, 6 - day)
    return this.todos.filter((todo) => {
      return todo.dueDate >= start && todo.dueDate <= end
    })
  }
  save(todo) {
    const todos = this.getAll()
    let exist = todos.find((t) => t.id === todo.id)
    if (exist) {
      exist = todo
    } else {
      if (!todo.id) todo.id = uuidv4()
      todos.push(new Todo(todo))
    }
    localStorage.setItem("todos", JSON.stringify(todos))
  }
  delete(id) {
    this.todos = this.todos.filter((todo) => todo.id !== id)
    localStorage.setItem("todos", JSON.stringify(this.todos))
  }
  toggleComplete(id) {
    const todos = this.getAll()
    let exist = todos.find((todo) => todo.id === id)
    if (exist) {
      exist.completed = !exist.completed
      localStorage.setItem("todos", JSON.stringify(todos))
    }
  }
}

class Todo {
  constructor(todo) {
    this.id = todo.id
    this.title = todo.title
    this.desc = todo.desc
    this.dueDate = todo.dueDate ? new Date(todo.dueDate) : ""
    this.priority = todo.priority
    this.completed = todo.completed
    this.projectId = todo.projectId || "0"
  }
}

export default new Todos()
