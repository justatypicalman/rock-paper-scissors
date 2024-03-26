let userScore = 0;
let computerScore = 0;
let text = document.querySelector(".text");
let textResult = document.querySelector(".text-result");
let imgElement = document.querySelector(".images img");

imgElement.classList.add("spin-animation");
function getComputerChoice(userChoice) {
  console.log(userChoice);
  let rps = ["Rock", "Paper", "Scissors"];

  let randomIndex = Math.floor(Math.random() * rps.length);

  let randomItem = rps[randomIndex];

  textResult.textContent = "Computer chose: " + randomItem;

  let result = "";
  if (userChoice === randomItem) {
    result = "It's a tie!";
  } else if (
    (userChoice === "Rock" && randomItem === "Scissors") ||
    (userChoice === "Paper" && randomItem === "Rock") ||
    (userChoice === "Scissors" && randomItem === "Paper")
  ) {
    result = "You won!";
    userScore++;
  } else {
    result = "You lost!";
    computerScore++;
  }

  document.querySelector(".text").textContent = result;

  document.getElementById("score").textContent =
    userScore + "-" + computerScore;

  switch (randomItem) {
    case "Rock":
      imgElement.src = "images/rock.png";
      break;
    case "Paper":
      imgElement.src = "images/paper.png";
      break;
    case "Scissors":
      imgElement.src = "images/scissors.png";

      break;
    default:
      imgElement.src = ""; // Default to empty if randomItem is unexpected
  }
  imgElement.style.display = "block";
  imgElement.classList.remove("spin-animation"); // Remove the class first
  void imgElement.offsetWidth; // Trigger reflow to restart the animation
  imgElement.classList.add("spin-animation"); // Add the class back to restart the animation

  // Remove the spin animation class after the animation completes
}

document.addEventListener("DOMContentLoaded", function () {
  let buttons = document.querySelectorAll(".btn");
  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      const myTimeout = setTimeout(result, 500);
      getComputerChoice(button.textContent); // Pass the button's text content as user's choice
    });
  });
});

document.querySelector(".buttons").onclick = function () {
  requestAnimation(imgElement);
};

var requestAnimation = function (obj) {
  obj.style.animation = "none";
  window.requestAnimationFrame(function () {
    obj.style.animation = "spin 1s";
  });
};

function result() {
  if (computerScore == 10) {
    alert("You lost😔");
  } else if (userScore == 10) {
    alert("You won! Prize will be given 😉");
  }
}
