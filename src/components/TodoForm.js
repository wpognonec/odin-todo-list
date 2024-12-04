import { el } from "../lib/dom"

export function TodoForm(projectId = 0) {
  return el(
    "dialog#addTodoDialog",
    {
      projectId,
    },
    [
      el(
        "form.flex-col.w300",
        {
          method: "dialog",
        },
        [
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
        ]
      ),
    ]
  )
}
