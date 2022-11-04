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
  let question3Input = document.getElementById("minecraft").value;
  let csharpResult = document.getElementById("result4");
  let pythonResult = document.getElementById("result3");
  let javascriptResult = document.getElementById("result2");
  let htmlResult = document.getElementById("result1");
  const resultWarning = document.getElementById("resultwarning");

if (question1Input && question2Input && question3Input){
  if (question1Input === "puzzles" && question2Input === "fox" || question2Input === "snakes" && question3Input === "meh" || question3Input === "hate") {
  pythonResult.classList.remove("hidden");
  console.log("ran");
  } else if (question1Input === "websites" && question2Input === "fox" && question3Input ==="meh" || question3Input === "hate") {
  htmlResult.classList.remove("hidden");
  console.log("ran");
  } else if ((question1Input === "puzzles") && (question2Input === "coffee") &&             (question3Input === "love" || question3Input === "meh")) {
    javascriptResult.classList.remove("hidden")
  } else {
    csharpResult.classList.remove("hidden");
  }
} else {
    resultWarning.classList.remove("hidden");
  }
}
  quizPage1Form.addEventListener("submit" , handleSubmit);
  startQuizBtn.addEventListener("click" , toQuizPage1);
})