import { v4 as uuidv4 } from "uuid"

class Todos {
  constructor() {
    this.todos = JSON.parse(localStorage.getItem("todos") || "[]")
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
      todos.push(todo)
    }
    localStorage.setItem("todos", JSON.stringify(todos))
  }
  delete(id) {
    const todos = this.getAll()
    const filteredTodos = todos.filter((todo) => todo.id !== id)
    this.todos = filteredTodos
    localStorage.setItem("todos", JSON.stringify(filteredTodos))
  }
}

export default new Todos()
