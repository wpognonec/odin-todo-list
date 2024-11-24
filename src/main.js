import "./reset.css"
import "./style.css"
import Inbox from "./views/Inbox"
import Week from "./views/Week"
import Project from "./views/Project"
// import { mount } from "./lib/dom"

const app = document.querySelector("#app")
const menu = document.querySelector("#menu")

new Inbox(app)

menu.addEventListener("click", (e) => {
  console.log(e.target.id)
  switch (e.target.id) {
    case "inbox-button":
      app.textContent = ""
      new Inbox(app)
      break
    case "week-button":
      app.textContent = ""
      new Week(app)
      break
    case "project-button":
      app.textContent = ""
      new Project(app)
      break
    default:
      break
  }
})

// const addTodoButton = document.querySelector("#addTodoButton")
// addTodoButton.addEventListener("click", () => showDialog())

// const dialog = document.querySelector("#addTodoDialog")

// function showDialog() {
//   dialog.close()
//   dialog.showModal()
// }

// window.showDialog = showDialog

// const inbox = new Inbox(app)
// inbox.updateTodoList()

// mount(app, inbox())
