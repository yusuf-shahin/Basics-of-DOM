```js
// className
// classList

const first = document.getElementById("first")
const second = document.getElementById("second")
const third = document.getElementById("third")

// const classValue = first.className;
// console.log(classValue); //# text

//! className over write the class . If we add new className , previous class will remove .

first.className = "colors"
console.log(first.className)

first.className = "text"
console.log(first.className)

//* solution
second.className = "colors text"

//! classList over write the class . We can add new class at anytime  . It is do not over write the previous class.

const classValue = third.classList
console.log(classValue) //# Its return a dom token list .

// third.classList.add("colors")
// third.classList.add("text")
// console.log(classValue)

//* same thing in one line
third.classList.add("text", "colors")

//* remove item
// third.classList.remove('text');

//? classList.contains() --> it basically return boolyons

// let result = third.classList.contains("colors")
// if (result) {
//   console.log("hello world")
// } else {
//   console.log("does not have the class")
// }

// const classValue = third.classList
// console.log(classValue)
```
