import "./reset.css"
import "./style.css"
import Inbox from "./views/Inbox"
import Week from "./views/Week"
import Project from "./views/Project"

const app = document.querySelector("#app")
const menu = document.querySelector("#menu")

new Inbox(app, "Inbox")

menu.addEventListener("click", (e) => {
  console.log(e.target.id)
  switch (e.target.id) {
    case "inbox-button":
      app.textContent = ""
      new Inbox(app, "Inbox", "0")
      break
    case "week-button":
      app.textContent = ""
      new Week(app, "Week", "2")
      break
    case "project-button":
      app.textContent = ""
      new Project(app, "Project", "1")
      break
    default:
      break
  }
})
