//? nodeValue

const item = document.getElementById('special');

// const value = item.nodeValue;
// console.log(value); //# null
// console.log(item.childNodes); //# return a nodeList array
// console.log(item.childNodes[0].nodeValue); //# this is special content

const value = item.childNodes[0].nodeValue;
console.log(value); //# this is special content

//? textContent

const easyValue = item.textContent; //# this is special content

// console.log(easyValue);
