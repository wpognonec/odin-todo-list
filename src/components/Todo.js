import { el, render } from "../lib/dom"

function createTodo(todo) {
  const element = el("div", [`TODO${todo.title}`])
  return render(element)
}

export { createTodo }
