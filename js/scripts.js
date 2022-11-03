window.addEventListener("load" , function() {
  const startQuizBtn = document.getElementById("start-quiz");
  let quizStartText = document.getElementById("quiz-start-text");
  let quizPage1Form = document.getElementById("form-div");

function toQuizPage1(){
  quizStartText.classList.add("hidden")
  quizPage1Form.classList.remove("hidden")

}
startQuizBtn.addEventListener("click" , toQuizPage1);
})