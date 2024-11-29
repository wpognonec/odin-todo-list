function el(_tag, attrs = {}, children = []) {
  if (attrs instanceof Array) {
    children = attrs
    attrs = {}
  }

  const { tag, id, className } = parse(_tag)
  const element = document.createElement(tag)

  if (id) element.id = id
  if (className) element.className = className

  for (const attr in attrs) {
    if (attrs[attr] === true) element.toggleAttribute(attr)
    else if (typeof attrs[attr] !== "boolean")
      element.setAttribute(attr, attrs[attr])
  }

  children.forEach((child) => {
    if (typeof child === "string") {
      element.appendChild(document.createTextNode(child))
    } else if (child instanceof Node) {
      element.appendChild(child)
    }
  })

  return element
}

function parse(query) {
  const chunks = query.split(/([.#])/)
  let id = ""
  let className = ""
  for (let i = 1; i < chunks.length; i += 2) {
    switch (chunks[i]) {
      case "#":
        id = chunks[i + 1]
        break
      case ".":
        className += ` ${chunks[i + 1]}`
        break
    }
  }
  return {
    tag: chunks[0] || "div",
    id,
    className: className.trim(),
  }
}

function getEl(parent) {
  return (
    (parent.nodeType && parent) || (!parent.el && parent) || getEl(parent.el)
  )
}

function mount(parent, child) {
  parent.appendChild(getEl(child))
}

export { el, mount }
