import { wordflick } from "./wordflick.js";

let initial_phrases = [
  "I shall stare into the abyss",
  "Peering into the heavens",
];

// Define an array of possible responses
const responses = [
  "It is certain.",
  "It is decidedly so.",
  "Without a doubt.",
  "Yes - definitely.",
  "You may rely on it.",
  "As I see it, yes.",
  "Most likely.",
  "Outlook good.",
  "Yes.",
  "Signs point to yes.",
  "Reply hazy, try again.",
  "Ask again later.",
  "Better not tell you now.",
  "Cannot predict now.",
  "Concentrate and ask again.",
  "Don't count on it.",
  "Outlook not so good.",
  "My sources say no.",
  "Very doubtful.",
];

export function generateAnswer() {
  // Choose a random response from the array
  const randomIndex = Math.floor(Math.random() * responses.length);
  const response = ["The heavens say " + responses[randomIndex] + " "];
  console.log(response);

  let audio = document.getElementById("audio");
  audio.play();

  wordflick(initial_phrases.concat(response));
}

export function resetAnswer() {
  // Remove the active class from the answer container to hide the response
  const answerContainer = document.getElementById("answer-container");
  answerContainer.classList.remove("active");
}
