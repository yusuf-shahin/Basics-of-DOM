// createElement('element')
// createTextNode('text content')
// element.appendChild(childElement)

const result = document.querySelector("#result")

//* create empty element
const bodyDiv = document.createElement("div")
const p = document.createElement("p")

//* create text node
const text = document.createTextNode("a simple body div")

//* append textNode inside createElement
bodyDiv.appendChild(p)
p.appendChild(text)
document.body.appendChild(bodyDiv)

const heading = document.createElement("h2")
const headingText = document.createTextNode("dynamic heading")
heading.appendChild(headingText)
heading.classList.add("blue")

result.appendChild(heading)

console.log(result.children)
