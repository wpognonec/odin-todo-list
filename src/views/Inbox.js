// import { TodoItem } from "../components/TodoItem"
// import { TodoForm } from "../components/TodoForm"
// import { el, mount } from "../lib/dom"
// import Todos from "../models/todos"
import AbstractTodos from "./AbstractTodos"

export default class Inbox extends AbstractTodos {
  constructor(root) {
    super(root)
    this.root.prepend(document.createTextNode("Index"))
  }
}
