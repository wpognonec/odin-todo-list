import { el } from "../lib/dom"
import delIcon from "/delete.svg"

export function ProjectItem(project) {
  return el("div.project-item.todo-item", { "data-id": project.id }, [
    el("div", [
      el("a#project-button.menu-button", { projectId: project.id }, [
        project.name,
      ]),
    ]),
    el("div.itemButtons", [
      el("img.delete", {
        src: delIcon,
        delete: true,
        width: "24px",
        height: "24px",
      }),
    ]),
  ])
}
