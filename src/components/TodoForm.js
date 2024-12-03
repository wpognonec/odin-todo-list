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
          el("label", ["Project"]),
          // el(
          //   "select",
          //   {
          //     name: "projectId",
          //     id: "projectId",
          //   },
          //   [
          //     el("option", { value: "0" }, ["Inbox"]),
          //     el("option", { value: "1" }, ["Project 1"]),
          //     el("option", { value: "2" }, ["Project 2"]),
          //     el("option", { value: "3" }, ["Project 3"]),
          //     el("option", { value: "4" }, ["Project 4"]),
          //   ]
          // ),
          el("button", ["Submit"]),
        ]
      ),
    ]
  )
}
