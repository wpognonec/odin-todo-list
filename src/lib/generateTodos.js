import todoApi from "../api/todos"

export default function generate() {
  todoApi.save({
    id: "1",
    title: "PJ1Todo1",
    desc: "Todo1 Desc",
    dueDate: "11/24/2024",
    priority: "high",
  })

  todoApi.save({
    id: "2",
    title: "PJ1Todo2",
    desc: "Todo2 Desc",
    dueDate: "11/24/2024",
    priority: "high",
  })

  todoApi.save({
    id: "3",
    title: "PJ1Todo3",
    desc: "Todo3 Desc",
    dueDate: "11/24/2024",
    priority: "high",
  })

  todoApi.save({
    id: "4",
    title: "PJ1Todo4",
    desc: "Todo4 Desc",
    dueDate: "11/24/2024",
    priority: "high",
  })

  todoApi.save({
    id: "5",
    title: "PJ1Todo5",
    desc: "Todo5 Desc",
    dueDate: "11/24/2024",
    priority: "high",
  })
}