import { el } from "../lib/dom"

export function TodoForm() {
  return el("form.flex-col.w300", [
    el("label", ["Title"]),
    el("input", {
      name: "title",
      id: "title",
    }),
    el("label", ["Description"]),
    el("input", {
      name: "desc",
      id: "desc",
    }),
    el("label", ["Due Date"]),
    el("input", {
      type: "date",
      name: "dueDate",
      id: "dueDate",
    }),
    el("label", ["Priority"]),
    el(
      "select",
      {
        name: "priority",
        id: "prioroty",
      },
      [
        el("option", ["Urgent"]),
        el("option", ["High"]),
        el("option", ["Medium"]),
        el("option", ["Low"]),
      ]
    ),
    el("button", ["Submit"]),
  ])
}
