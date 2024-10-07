### innerHTML ---> we get the whole HTML element inside the property

```js
const list = document.getElementById("first")
const div = document.getElementById("second")
const item = document.querySelector(".item")

console.log(list.innerHTML)
```

**in console**

- ```html
  <li class="item">list item</li>
  <li>list item</li>
  ```

### textContent ---> we get the text inside the property

```js
console.log(div.textContent)
console.log(list.textContent)
```

**in console**

- `i have some text content`
- ```
    list item
    list item
  ```
- we get every thing as string .

### Create child element using innerHTML :-

```js
const emptyDiv = document.querySelector(".third")
emptyDiv.innerHTML = "<p>I am third box . I am under the water please help</p>"
```

- here we write our html element as string .

### Create HTML element dynamically , use innerHTML append this inside the element :-

```js
const randomVar = "random value"
const red = "red"

//* create element
const ul = document.createElement("ul")

//* set the html element inside ul
ul.innerHTML = `<li class="item">${randomVar}</li>
      <li class=${red}>list item</li> <li>list item</li>`
// templete leteral ensure that everything gonna string in here

//* append this in browser
document.body.appendChild(ul)
```

**What happen we do the same things in textContent**

```js
div.textContent = `<li class="item">${randomVar}</li>
      <li>list item</li> <li>list item</li>`
```

**in browser**
`<li class="item">random value</li> <li>list item</li> <li>list item</li>`
