import { el } from "../lib/dom"
import delIcon from "/delete.svg"

export function ProjectItem(project) {
  return el("a#project-button.menu-button", { "data-id": project.id }, [
    project.name,
    el("div.item-buttons", [
      el("img.delete", {
        src: delIcon,
        delete: true,
        width: "24px",
        height: "24px",
      }),
    ]),
  ])
}
