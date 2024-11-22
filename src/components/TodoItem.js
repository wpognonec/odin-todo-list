import { el } from "../lib/dom"

export default class TodoItem {
  constructor(todo) {
    this.el = el("div", [
      `${todo.title}`,
      el("div", ["YOOO", el("div", ["hihi"])]),
      el("div", ["another"]),
    ])
  }
}
