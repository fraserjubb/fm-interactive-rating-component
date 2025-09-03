/* 
********************************
ELEMENT SELECTIONS:
********************************
*/
const ratingCard = document.querySelector(".card");
const feedbackCard = document.querySelector(".card2");
// const finalScore = document.querySelector(".card__final-score");
const scoreButtons = document.querySelectorAll(".card__btn");
const submitBtn = document.querySelector(".card__submit");

/* 
********************************
FUNCTIONS:
********************************
*/
function getSelectedScore() {
  const selectedBtn = Array.from(scoreButtons).find(score =>
    score.classList.contains("selected-btn")
  );

  const selectedScore = selectedBtn ? selectedBtn.textContent : null;

  return selectedScore;
}

function createScoreElement() {
  const scoreElement = document.createElement("p");
  scoreElement.className = "card__final-score";

  const scoreText = document.createTextNode(
    `You selected ${getSelectedScore()} out of 5`
  );

  scoreElement.appendChild(scoreText);

  return scoreElement;
}

function displayFeedbackCard() {
  ratingCard.classList.add("inactive");
  feedbackCard.classList.remove("inactive");
}

function insertFinalScore() {
  const feedbackCardTitle = document.querySelector("#thanks");

  const scoreGivenElement = createScoreElement();

  feedbackCardTitle.insertAdjacentElement("beforebegin", scoreGivenElement);
}

function handleSubmitScore() {
  displayFeedbackCard();
  insertFinalScore();
}

/* 
********************************
EVENT LISTENERS:
********************************
*/

submitBtn.addEventListener("click", handleSubmitScore);
