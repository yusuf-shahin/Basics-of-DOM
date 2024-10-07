//! ============
//? getAttribute();
//! ============

//? Its basically help us to find the arrribute name . Like id or class name

//* select the element
const first = document.querySelector(".first")

const classValue = first.getAttribute("class")
console.log(classValue) //# first

const idValue = first.getAttribute("id")
console.log(idValue) //# specal

//* select the element
const link = document.getElementById("link")
const showLink = link.getAttribute("href")
console.log(showLink)

//! ============
//? setAttribute();
//! ============

//? Its hold two things , which attribute we gonna set . Then what kind of name we provide .

//* select the element using dom traversal
const last = link.nextElementSibling

last.setAttribute("class", "first") //# class= "first"
last.setAttribute("id", "added") //# id= "added"
last.textContent = "i also have a class of first"
console.log(last)

console.log(last.getAttribute("id"))

const links = document.querySelectorAll(".first")
console.log(links)

//! we also change the attribute name by setAttribute property .

const lastThing = document.querySelector(".thing")
console.log(lastThing)

lastThing.setAttribute("class", "dynamicValue")
console.log(lastThing)
