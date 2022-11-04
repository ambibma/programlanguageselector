window.addEventListener("load" , function() {
  const startQuizBtn = document.getElementById("start-quiz");
  let quizStartText = document.getElementById("quiz-start-text");
  let quizPage1Form = document.getElementById("quiz-page1");
  let submitBttn = document.getElementById("submit");
function toQuizPage1(){
  quizStartText.classList.add("hidden");
  quizPage1Form.classList.remove("hidden");

}
function handleSubmit(event){
  event.preventDefault();
  const question1Input = document.getElementById("form-question1").value;
  const question2Input = document.getElementById("question2").value;
  const question3Input = docuemnt.querySelector("input[name='minecraft']:checked").value;

}
if 


startQuizBtn.addEventListener("click" , toQuizPage1);
submitBttn.addEventListener("submit" , handleSubmit);
})