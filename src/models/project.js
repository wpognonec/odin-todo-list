import Todo from "./todo"

export default class Project {
  constructor(name, todos = []) {
    this.name = name
    this.todos = todos
  }
  addTodo(title, desc, dueDate, priority) {
    this.todos.push(new Todo(title, desc, dueDate, priority))
  }
  removeTodo(id) {
    this.todos.splice(id, 1)
  }
  getTodo(id) {
    return this.todos[id]
  }
  getAllTodos() {
    return this.todos
  }
}
