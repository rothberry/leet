// WesBos
// Code for changing the color of the github squares

let currentColor = "#ebedfe"
// let currentColor = "#fcb103"
let clicking = false
const boxes = document.querySelectorAll(".js-calendar-graph-svg rect")
const graph = document.querySelector(".js-calendar-graph-svg")

// code for switching the current color

const handleColorChange = (e) => {
  const el = e.currentTarget
  currentColor = el.style["background-color"]
  console.log(currentColor)
}

const handlePointerEnter = (e) => {
  const rect = e.currentTarget
  if (clicking) {
    rect.setAttribute("fill", currentColor)
  }
}

boxes.forEach((box) => box.addEventListener("pointermove", handlePointerEnter))
boxes.forEach((box) => box.addEventListener("pointerup", handlePointerEnter))

document
  .querySelectorAll(".legend li")
  .forEach((li) => li.addEventListener("click", handleColorChange))

graph.addEventListener("pointerup", () => (clicking = false))
graph.addEventListener("pointerdown", () => (clicking = true))
graph.addEventListener("pointerleave", () => (clicking = false))
