import { el } from "../lib/dom"
// import { TodoItem } from "./TodoItem"

export function ProjectList(projects) {
  return el(
    "div.project-list",
    projects.map((project) =>
      el("a#project-button.menu-button", { projectId: project.id }, [
        project.name,
      ])
    )
  )
}
