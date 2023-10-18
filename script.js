const min = 0;
const max = 20;
const randNum = Math.floor(Math.random() * (max - min + 1));
console.log(randNum);
let score = 20;
let highScore = 0;

const popedMessage = function (message) {
  document.querySelector(".popupMsg").textContent = message;
};
let userInput = document.querySelector(".userInput");
//console.log(guess);
document.querySelector(".checkBtn"),
  addEventListener("click", function () {
    inputToNum = Number(userInput.value);

    if (!inputToNum) {
      popedMessage("⛔️ No number!");
    } else if (randNum === inputToNum) {
      popedMessage("🎉 Correct Number!");

      if (score > highScore) {
        highScore = score;
        document.querySelector(".highScore").textContent = highScore;
      }

      document.body.style.backgroundColor = "#499c51";
      document.querySelector(".secretGuess").value = randNum;
    } else if (inputToNum !== randNum) {
      if (score > 0) {
        popedMessage(inputToNum > randNum ? "📈 Too high!" : "📉 Too low!");
        score--;
        document.querySelector(".score").textContent = score;
      } else {
        popedMessage("💥 You lost the game!");
        document.querySelector(".score").textContent = 0;
      }
    }
  });

document.querySelector(".again").addEventListener("click", function () {
  score = 20;

  // console.log("click");
  document.querySelector(".score").textContent = score;
  document.querySelector(".userInput").value = " ";
  document.body.style.backgroundColor = "#323232";
  document.querySelector(".secretGuess").value = "?";
});
