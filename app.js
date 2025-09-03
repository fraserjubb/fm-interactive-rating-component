const card1 = document.querySelector(".card");
const card2 = document.querySelector(".card2");
const finalScore = document.querySelector(".card__final-score");
const scoreBtn = document.querySelectorAll(".card__btn");
const submitBtn = document.querySelector(".card__submit");

// const returnedScore = scoreBtn.forEach(score => {
//   if (score.classList.contains("selected-btn")) {
//     score.textContent;
//   }
// });
// console.log(returnedScore);

// const returnedScore = Array.from(scoreBtn).find(score =>
//   score.classList.contains("selected-btn")
// );
// console.log(returnedScore);

const selectedBtn = Array.from(scoreBtn).find(score =>
  score.classList.contains("selected-btn")
);

const returnedScore = selectedBtn ? selectedBtn.textContent : null;
console.log(returnedScore);

function displayFeedbackScore() {
  card1.classList.add("inactive");
  card2.classList.remove("inactive");
}

function submitScore() {
  displayFeedbackScore();
  addElement();
}

submitBtn.addEventListener("click", submitScore);

// console.log(finalScore.textContent);

function addElement() {
  console.log("I am here");
  // create a new div element
  const newP = document.createElement("p");
  newP.className = "card__final-score";

  // and give it some content
  const newContent = document.createTextNode(
    `You selected ${returnedScore} out of 5`
  );

  // add the text node to the newly created div
  newP.appendChild(newContent);

  // add the newly created element and its content into the DOM
  const cardTitle = document.querySelector("#thanks");
  cardTitle.insertAdjacentElement("beforebegin", newP);
  console.log(cardTitle);
}
