window.addEventListener("load" , function() {
  const startQuizBtn = document.getElementById("start-quiz");
  let quizStartText = document.getElementById("quiz-start-text");
  let quizPage1Text = docuemt.getElementById("quiz-page1-text")
  let quizPage1Form = document.getElementById("form-div");
  let quizPage2Form = document.getElementById("question2-div");
  const nextPageBtn = document.getElementById("page2");

function toQuizPage1(){
  quizStartText.classList.add("hidden");
  quizPage2Form.classList.add("hidden");
  quizPage1text.classList.remove("hidden");

}
function toQuizPage2(){
  quizStartText.classList.add("hidden");
  quizPage1Form.classList.add("hidden");
  quizPage2Form.classList.remove("hidden");

}


nextPageBtn.addEventListener("click", toQuizPage2);
startQuizBtn.addEventListener("click" , toQuizPage1);
})