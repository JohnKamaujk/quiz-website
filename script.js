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

  let radios1 = document.getElementsByName("q1");
  let radios2 = document.getElementsByName("q2");
  let radios3 = document.getElementsByName("q3");
  let radios4 = document.getElementsByName("q4");
  let radios5 = document.getElementsByName("q5");
  let radios6 = document.getElementsByName("q6");
  let radios7 = document.getElementsByName("q7");
  let radios8 = document.getElementsByName("q8");
  let radios9 = document.getElementsByName("q9");
  let radios10 = document.getElementsByName("q10");

  // loops through radio inouts of the same name and reset to uncheck
  for (let i = 0; i < radios1.length; i++) {
    radios1[i].checked = false;
  }
  for (let i = 0; i < radios2.length; i++) {
    radios2[i].checked = false;
  }
  for (let i = 0; i < radios3.length; i++) {
    radios3[i].checked = false;
  }
  for (let i = 0; i < radios4.length; i++) {
    radios4[i].checked = false;
  }
  for (let i = 0; i < radios5.length; i++) {
    radios5[i].checked = false;
  }
  for (let i = 0; i < radios6.length; i++) {
    radios6[i].checked = false;
  }
  for (let i = 0; i < radios7.length; i++) {
    radios7[i].checked = false;
  }
  for (let i = 0; i < radios8.length; i++) {
    radios8[i].checked = false;
  }
  for (let i = 0; i < radios9.length; i++) {
    radios9[i].checked = false;
  }
  for (let i = 0; i < radios10.length; i++) {
    radios10[i].checked = false;
  }
}
