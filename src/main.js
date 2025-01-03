import "./reset.css"
import "./style.css"
import Inbox from "./views/Inbox"
import Week from "./views/Week"
import Project from "./views/Project"
import { ProjectList } from "./components/ProjectList"
import Projects from "./models/projects"

const app = document.querySelector("#app")
const menu = document.querySelector("#menu")

menu.append(ProjectList(Projects.getAll()))

new Inbox(app, "Inbox")

menu.addEventListener("click", (e) => {
  if (e.target.classList.contains("menu-button")) {
    let buttons = document.querySelectorAll(".menu-button")
    buttons.forEach((el) => {
      el.classList.remove("selected")
    })
    e.target.classList.add("selected")

    switch (e.target.id) {
      case "inbox-button":
        app.textContent = ""
        new Inbox(app, "Inbox", "0")
        break
      case "week-button":
        app.textContent = ""
        new Week(app, "Week", "0")
        break
      case "project-button":
        app.textContent = ""
        new Project(app, e.target.textContent, e.target.getAttribute("projectId"))
        break
      default:
        break
    }
  }
})

document.querySelector("#add-project").addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    let newProj = { name: e.target.value }
    Projects.save(newProj)
    e.target.value = ""
    document.querySelector(".project-list").remove()
    menu.append(ProjectList(Projects.getAll()))
  }
})
