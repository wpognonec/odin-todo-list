import { el } from "../lib/dom"
import { ProjectItem } from "./ProjectItem"

export function ProjectList(projects) {
  return el("div.project-list", [
    el("input#add-project", { type: "text", placeholder: "Add Project" }),
    el("span", { style: "font-size: 24px; font-weight: 500;" }, ["Projects"]),
    el(
      "div",
      projects.map((project) => ProjectItem(project))
    ),
  ])
}
