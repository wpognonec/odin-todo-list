import { el } from "../lib/dom"
import delIcon from "/delete.svg"
import editIcon from "/edit.svg"

export function ProjectItem(project) {
  return el("div.project-item.todo-item", { "data-id": project.id }, [
    el("div", [
      el("a#project-button.menu-button", { projectId: project.id }, [
        project.name,
      ]),
    ]),
    el("div.itemButtons", [
      el("img.edit", {
        src: editIcon,
        edit: true,
        width: "24px",
        height: "24px",
      }),
      el("img.delete", {
        src: delIcon,
        delete: true,
        width: "24px",
        height: "24px",
      }),
    ]),
  ])
}
