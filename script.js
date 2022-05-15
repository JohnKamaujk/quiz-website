// Starting marks is 0 as we increment with 10 for correct every answr
let marks = 0;

// Create variables to store instance of form quiz & submitt button
let quiz = document.getElementById("quiz");
let btn = document.getElementById("btn");

// Hide the div that is suppose to display the results first
let resultsDisplay = document.getElementById("results");
resultsDisplay.style.display = "none";

let grade = document.getElementById("grade");

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

  // if statement checks marks and award grade
  if (marks >= 70) {
    grade.textContent = "GRADE A ,EXCELLENT!🏆";
  } else if (marks >= 60) {
    grade.textContent = "GRADE B ,GOOD!🏅";
  } else if (marks >= 50) {
    grade.textContent = "GRADE C,AVERAGE!👏🏽";
  } else if (marks >= 40) {
    grade.textContent = "GRADE D ,POOR!👎🏽";
  } else {
    grade.textContent = "GRADE E,PATHETIC!😞";
  }
}

function newTrial() {
  // showing the form for the quiz and submitt button
  quiz.style.display = "block";
  btn.style.display = "block";
  // Hiding the display for the results
  resultsDisplay.style.display = "none";

  // since its a newtrial we set the marks to zero
  marks = marks - marks;
}
