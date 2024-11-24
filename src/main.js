import "./reset.css"
import "./style.css"
import inbox from "./views/Inbox"
import { mount } from "./lib/dom"

const app = document.querySelector("#app")

mount(app, inbox())
