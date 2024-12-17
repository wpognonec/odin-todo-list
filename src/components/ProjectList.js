import { el } from "../lib/dom"
import { ProjectItem } from "./ProjectItem"

export function ProjectList(projects) {
  return el(
    "div.project-list",
    projects.map((project) => ProjectItem(project))
  )
}
