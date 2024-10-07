// innerHTML
// textContent

const list = document.getElementById("first")
const div = document.getElementById("second")
const emptyDiv = document.querySelector(".third")
const item = document.querySelector(".item")

console.log(div.textContent)
console.log(list.innerHTML) //# get whole HTML element inside list
console.log(list.textContent) //# only get the text inside list

const randomVar = "random value"

div.textContent = `<li class="item">${randomVar}</li>
      <li>list item</li> <li>list item</li>`

emptyDiv.innerHTML = "<p>I am third box . I am under the water please help</p>"

//! ===========
//? create element dynamically
//! ==========

const red = "red"

//* create element
const ul = document.createElement("ul")

//* set the html element inside ul
ul.innerHTML = `<li class="item">${randomVar}</li>
      <li class=${red}>list item</li> <li>list item</li>`

//* append this in browser
document.body.appendChild(ul)
