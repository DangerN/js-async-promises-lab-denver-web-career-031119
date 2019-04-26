const questions = [
  {questionText: "Lightning never strikes in the same place twice", answer: false},
  {questionText: "Humans can distinguish between over one trillion different smells", answer: true},
  {questionText: "Goldfish only have a memory of about three seconds", answer: false}
]

let question;

const qContainer = document.querySelector('.question-container')

function appendQuestion(q){
  // console.log(q.questionText)
  // console.log(qContainer)
  qContainer.innerHTML = q.questionText
}

function askQuestionThen(time){
  question = questions[0]
  appendQuestion(question)
  return new Promise( resolve => setTimeout( () => resolve(question), time))
}

function removeQuestion(){
  qContainer.innerText = ""
}

function askQuestionThenRemoveQuestion(time){
  return askQuestionThen(time).then(removeQuestion)
}

function trueAndFalseButtons(){
  return document.querySelectorAll('.green, .red')
}

function toggleTrueAndFalseButtons(){
  trueAndFalseButtons().forEach( button => {
      button.classList.toggle('hide')
  })
}

function displayQuestionOnClick(){
  return document.querySelector('a').addEventListener('click', appendQuestion)
}
