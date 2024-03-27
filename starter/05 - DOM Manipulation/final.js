// Selecting the respective elements
const container = document.querySelector("main");
const button = document.querySelector(".btn");
const modal = document.querySelector(".modal");
//
//
// Adding an event listener on the button
button.addEventListener("click", function () {
  // Changing the color of the container
  container.style.backgroundColor = "#FF5A00";
  //   Changing the display property of modal
  modal.style.display = "block";
});
//
//
