import { el } from "../lib/dom"

export function TodoItem(todo) {
  return el("div", [`${todo.title}`])
}

// export default class TodoItem {
//   constructor(todo) {
//     this.el = el("div", [`${todo.title}`])
//   }
// }
