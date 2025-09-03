const card1 = document.querySelector(".card");
const card2 = document.querySelector(".card2");
// const finalScore = document.querySelector(".card__final-score");
const scoreBtn = document.querySelectorAll(".card__btn");
const submitBtn = document.querySelector(".card__submit");

// const returnedScore = scoreBtn.forEach(score => {
//   if (score.classList.contains("selected-btn")) {
//     score.textContent;
//   }
// });
// console.log(returnedScore);

function getSelectedScore() {
  const selectedBtn = Array.from(scoreBtn).find(score =>
    score.classList.contains("selected-btn")
  );

  const returnedScore = selectedBtn ? selectedBtn.textContent : null;

  return returnedScore;
}

function createScoreElement() {
  const newP = document.createElement("p");
  newP.className = "card__final-score";

  const newContent = document.createTextNode(
    `You selected ${getSelectedScore()} out of 5`
  );

  newP.appendChild(newContent);

  return newP;
}

function displayFeedbackCard() {
  card1.classList.add("inactive");
  card2.classList.remove("inactive");
}

function insertFinalScore() {
  const cardTitle = document.querySelector("#thanks");

  const scoreGivenEl = createScoreElement();

  cardTitle.insertAdjacentElement("beforebegin", scoreGivenEl);
}

function handleSubmitScore() {
  displayFeedbackCard();
  insertFinalScore();
}

submitBtn.addEventListener("click", handleSubmitScore);
