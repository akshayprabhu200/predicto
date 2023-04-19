import { generateAnswer } from "./eightBall_seraphina.js";

console.log(generateAnswer);
const form = document.getElementById("eight-form");
form.addEventListener("submit", (event) => {
  event.preventDefault(); // prevent form submission
  generateAnswer(); // call exported function
});
