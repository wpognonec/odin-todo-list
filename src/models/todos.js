import { v4 as uuidv4 } from "uuid"

class Todos {
  constructor() {
    this.todos = []
    const todoStore = JSON.parse(localStorage.getItem("todos") || "[]")
    todoStore.forEach((todo) => {
      this.todos.push(
        new Todo(todo.id, todo.title, todo.desc, todo.dueDate, todo.priority)
      )
    })
  }
  getAll() {
    return this.todos
  }
  save(todo) {
    const todos = this.getAll()
    let exist = todos.find((note) => note.id === todo.id)
    if (exist) {
      exist = todo
    } else {
      if (!todo.id) todo.id = uuidv4()
      todos.push(
        new Todo(todo.id, todo.title, todo.desc, todo.dueDate, todo.priority)
      )
    }
    localStorage.setItem("todos", JSON.stringify(todos))
  }
  delete(id) {
    this.todos.filter((todo) => todo.id !== id)
    localStorage.setItem("todos", JSON.stringify(this.todos))
  }
}

class Todo {
  constructor(id, title, desc, dueDate, priority) {
    this.id = id
    this.title = title
    this.desc = desc
    this.dueDate = dueDate
    this.priority = priority
  }
}

export default new Todos()

// id: "1",
// title: "PJ1Todo1",
// desc: "Todo1 Desc",
// dueDate: "11/24/2024",
// priority: "high",
