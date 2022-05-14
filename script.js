// function to check if checked radio value is equal to correct answer
function check() {
  var score = 0;

  if (document.getElementById("answer1").checked) {
    score += 10;
  }
  if (document.getElementById("answer2").checked) {
    score += 10;
  }
  if (document.getElementById("answer3").checked) {
    score += 10;
  }
  if (document.getElementById("answer4").checked) {
    score += 10;
  }
  if (document.getElementById("answer5").checked) {
    score += 10;
  }
  if (document.getElementById("answer6").checked) {
    score += 10;
  }
  if (document.getElementById("answer7").checked) {
    score += 10;
  }
  if (document.getElementById("answer8").checked) {
    score += 10;
  }
  if (document.getElementById("answer9").checked) {
    score += 10;
  }
  if (document.getElementById("answer10").checked) {
    score += 10;
  }

  var writing = document.getElementById("demo");
  writing.textContent = score;
}
