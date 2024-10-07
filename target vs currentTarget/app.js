// currentTarget - always refers to the element to which the event handler has been attached to
// target - identifies the element  on which the event occured

const btns = document.querySelectorAll(".btn")

btns.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    //! current target
    console.log(e.currentTarget) //# always refer to the button , we dont get strong tag .
    console.log(e.currentTarget.textContent)
    // e.currentTarget.style.color = "green"

    //! target
    // console.log(e.target) //# except button , if click the strong tag . we also find that
    console.log(e.target.textContent)
    // console.log(e.target.textContent)
    e.target.style.color = "blue"
  })
})

const flexContainer = document.querySelector(".flex-container")
// console.log(flexContainer)

flexContainer.addEventListener("click", (e) => {
  // //! current target
  // console.log(e.currentTarget)
  // console.log(e.currentTarget.textContent)
  //# currentTarger always refer to those element where event object gonna pass

  //! target
  console.log(e.target)
  console.log(e.target.textContent)
  //# taget refers every specific element of event object
})
