### createElement('element') ---> createTextNode('text content') ---> element.appendChild(childElement)

**dynimically create a element and append in a body**

```js
//* create empty element
const bodyDiv = document.createElement("div")
const p = document.createElement("p")

//* create text node
const text = document.createTextNode("a simple body div")

//* append textNode inside createElement
bodyDiv.appendChild(p)
p.appendChild(text)
document.body.appendChild(bodyDiv)
```

**dynimically create a element and append inside HTML element**

```js
const result = document.querySelector("#result")

const heading = document.createElement("h2")
const headingText = document.createTextNode("dynamic heading")
heading.appendChild(headingText)
heading.classList.add("blue")

result.appendChild(heading)

console.log(result.children)
```
