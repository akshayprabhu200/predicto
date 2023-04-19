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
  const response = responses[randomIndex];

  // Delete the existing answer inside the SVG immediately
  const answerElement = document.getElementById("answer");
  answerElement.textContent = "";

  // Shake the SVG for 3 seconds
  const eightBall = document.getElementById("eight-ball");
  eightBall.classList.add("shake");

  setTimeout(() => {
    // Stop shaking the SVG
    eightBall.classList.remove("shake");

    // Display the response in the answer container
    answerElement.textContent = response;
    const answerContainer = document.getElementById("answer-container");
    answerContainer.classList.add("active");

    // Create a new SpeechSynthesisUtterance object and set its text to the answer
    const utterance = new SpeechSynthesisUtterance(response);

    // Speak the answer out loud
    speechSynthesis.speak(utterance);
  }, 1000);
}

export function resetAnswer() {
  // Remove the active class from the answer container to hide the response
  const answerContainer = document.getElementById("answer-container");
  answerContainer.classList.remove("active");
}
