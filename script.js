// Starting marks is 0 as we increment with 10 for correct every answr
let marks = 0;

// Create variables to store instance of form quiz & submitt button
let quiz = document.getElementById("quiz");
let btn = document.getElementById("btn");

// Hide the div that is suppose to display the results first
let resultsDisplay = document.getElementById("results");
resultsDisplay.style.display = "none";

// This function verifies if correct answer is checked
function verify() {
  if (document.getElementById("answer1").checked) {
    marks += 10;
  }
  if (document.getElementById("answer2").checked) {
    marks += 10;
  }
  if (document.getElementById("answer3").checked) {
    marks += 10;
  }
  if (document.getElementById("answer4").checked) {
    marks += 10;
  }
  if (document.getElementById("answer5").checked) {
    marks += 10;
  }
  if (document.getElementById("answer6").checked) {
    marks += 10;
  }
  if (document.getElementById("answer7").checked) {
    marks += 10;
  }
  if (document.getElementById("answer8").checked) {
    marks += 10;
  }
  if (document.getElementById("answer9").checked) {
    marks += 10;
  }
  if (document.getElementById("answer10").checked) {
    marks += 10;
  }

  // Hide the quiz form and submitt button to display the results
  quiz.style.display = "none";
  btn.style.display = "none";
  resultsDisplay.style.display = "block";

  let totalMarks = document.getElementById("demo");
  totalMarks.textContent = "Your score is  " + marks;
}

function showQuiz() {
  quiz.style.display = "block";
  btn.style.display = "block";

  if ((resultsDisplay.style.display = "block")) {
    resultsDisplay.style.display = "none";
  } else {
    resultsDisplay.style.display = "none";
  }
}
