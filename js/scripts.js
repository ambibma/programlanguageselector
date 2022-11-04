window.addEventListener("load" , function() {
  const startQuizBtn = document.getElementById("start-quiz");
  let quizStartText = document.getElementById("quiz-start-text");
  let quizPage1Form = document.getElementById("quiz-page1");

  function hideQuiz(){
  quizStartText.setAttribute("class", "hidden");
  quizPage1Form.setAttribute("class", "hidden")
}

function toQuizPage1(){
  quizStartText.classList.add("hidden");
  quizPage1Form.classList.remove("hidden");

}
function handleSubmit(event){
  event.preventDefault();
  hideQuiz();
  const question1Input = document.getElementById("form-question1").value;
  const question2Input = document.getElementById("question2").value;
  const question3Input = docuemnt.querySelector("input[name='minecraft']:checked").value;

}

// if (question1Input === "puzzles" )

startQuizBtn.addEventListener("click" , toQuizPage1);
quizPage1Form.addEventListener("submit" , handleSubmit);
})