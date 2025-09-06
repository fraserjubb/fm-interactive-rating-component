/* 
********************************
ELEMENT SELECTIONS:
********************************
*/
const ratingCard = document.querySelector(".card");
const feedbackCard = document.querySelector(".card2");
const scoreButtons = document.querySelectorAll(".card__btn");
const submitBtn = document.querySelector(".card__submit");

/* 
********************************
FUNCTIONS:
********************************
*/
function handleSelectedButton(e) {
  scoreButtons.forEach(btn => btn.classList.remove("selected-btn"));
  e.target.classList.add("selected-btn");
}

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

function insertFinalScore() {
  const feedbackCardTitle = document.querySelector("#thanks");

  const scoreGivenElement = createScoreElement();

  feedbackCardTitle.insertAdjacentElement("beforebegin", scoreGivenElement);
}

function displayFeedbackCard() {
  ratingCard.classList.add("inactive");
  feedbackCard.classList.remove("inactive");
}

function handleSubmitScore() {
  insertFinalScore();
  displayFeedbackCard();
}

/* 
********************************
EVENT LISTENERS:
********************************
*/
scoreButtons.forEach(btn =>
  btn.addEventListener("click", handleSelectedButton)
);
submitBtn.addEventListener("click", handleSubmitScore);
