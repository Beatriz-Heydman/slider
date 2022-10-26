const circlesButtons = document.querySelectorAll(".circles");
const gameDescription = document.querySelector(".description");
const nextArrow = document.querySelector(".arrow_right");
const backArrow = document.querySelector(".arrow_left");

const colorCircleButton = "#d5d5d5";

let indexCurrentGame = 0;

function changeColorButton() {
  circlesButtons.forEach((circleButton) => {
    circleButton.style.background = "none";
  });
  circlesButtons[indexCurrentGame].style.background = colorCircleButton;
}

circlesButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    document.body.style.backgroundImage = `url(${games[index].srcImg})`;
    gameDescription.innerHTML = games[index].content;

    circlesButtons.forEach((circleButton) => {
      circleButton.style.background = "none";
    });
    circlesButtons[index].style.background = colorCircleButton;
  });
});

nextArrow.addEventListener("click", () => {
  if (indexCurrentGame === games.length - 1) {
    indexCurrentGame = 0;
  } else {
    indexCurrentGame++;
  }
  document.body.style.backgroundImage = `url(${games[indexCurrentGame].srcImg})`;
  gameDescription.innerHTML = games[indexCurrentGame].content;

  changeColorButton();
});

backArrow.addEventListener("click", () => {
  if (indexCurrentGame === 0) {
    indexCurrentGame = 2;
  } else {
    indexCurrentGame--;
  }
  document.body.style.backgroundImage = `url(${games[indexCurrentGame].srcImg})`;
  gameDescription.innerHTML = games[indexCurrentGame].content;

  changeColorButton();
});
