import "./reset.css"
import "./style.css"
import Inbox from "./views/Inbox"
import Week from "./views/Week"
import Project from "./views/Project"

const app = document.querySelector("#app")
const menu = document.querySelector("#menu")

new Inbox(app, "Inbox", "inbox")

menu.addEventListener("click", (e) => {
  if (e.target.classList.contains("menu-button")) {
    let buttons = document.querySelectorAll(".menu-button")
    buttons.forEach((el) => {
      el.classList.remove("selected")
    })
    // e.target.classList.add("selected")

    switch (e.target.id) {
      case "inbox-button":
        new Inbox(app, "Inbox", "inbox")
        break
      case "week-button":
        new Week(app, "Week", "week")
        break
      case "project-button":
        new Project(app, e.target.textContent, e.target.getAttribute("data-id"))
        break
      default:
        break
    }
  }
})
