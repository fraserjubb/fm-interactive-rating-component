/* 
********************************
ELEMENT SELECTIONS:
********************************
*/
const ratingCard = document.querySelector(".rating-card");
const feedbackCard = document.querySelector(".feedback-card");
const scoreButtons = document.querySelectorAll(".rating-card__btn");
const submitBtn = document.querySelector(".rating-card__btn--submit");

/* 
********************************
FUNCTIONS:
********************************
*/
function handleSelectedButton(e) {
  scoreButtons.forEach(btn =>
    btn.classList.remove("rating-card__btn--selected")
  );
  e.target.classList.add("rating-card__btn--selected");
}

function getSelectedScore() {
  const selectedBtn = Array.from(scoreButtons).find(score =>
    score.classList.contains("rating-card__btn--selected")
  );

  const selectedScore = selectedBtn ? selectedBtn.textContent : null;

  return selectedScore;
}

function createScoreElement() {
  const scoreElement = document.createElement("p");
  scoreElement.className = "feedback-card__final-score";

  const scoreText = document.createTextNode(
    `You selected ${getSelectedScore()} out of 5`
  );

  scoreElement.appendChild(scoreText);

  return scoreElement;
}

function insertFinalScore() {
  const feedbackCardTitle = document.querySelector(".feedback-card__title");

  const scoreGivenElement = createScoreElement();

  feedbackCardTitle.insertAdjacentElement("beforebegin", scoreGivenElement);
}

function displayFeedbackCard() {
  ratingCard.classList.add("is-inactive");
  feedbackCard.classList.remove("is-inactive");
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
