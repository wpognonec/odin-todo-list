function el(tag, attrs = {}, children = []) {
  if (attrs instanceof Array) {
    children = attrs
    attrs = {}
  }

  return {
    tag,
    attrs,
    children,
  }
}

function render(vnode) {
  const { tag, id, className } = parse(vnode.tag)

  const el = document.createElement(tag)

  if (id) el.id = id
  if (className) el.className = className

  for (const attr in vnode.attrs) {
    el.setAttribute(attr, vnode.attrs[attr])
  }

  vnode.children.forEach((child) => {
    typeof child === "string"
      ? el.appendChild(document.createTextNode(child))
      : el.appendChild(render(child))
  })

  return el
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

export { el, render }
