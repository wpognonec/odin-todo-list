import "./reset.css"
import "./style.css"
import Inbox from "./views/Inbox"
import { mount } from "./lib/dom"

const app = document.querySelector("#app")
const inbox = new Inbox(app)
inbox.updateTodoList()

// mount(app, inbox())
