const quizData = [
    {
        question:"Whitch language runs in a web browser?",
        a: "java",
        b: "c",
        c: "phyton",
        d: "javascript",
        correct: "d",
    },
    {
        question: "what does css stand for?",
        a: "Centrale Style Sheets",
        b: "cascading style sheet",
        c: "Cascading Simple Sheet",
        d: "Cars SUVs Sailboats",
        correct: "b",

    },
    {
        question: "What does HTML stand for?",
        a: "hypertext markup Langage",
        b: " Hypertext Markdown Langage",
        c: "Hyperloop Machine Langage",
        d: "Helicopters Terminels Motorboats lanborginis",
        correct: "a",
    },
    {
        question: "What year was Javascript launchid",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the obove",
        correct: "b",
    },

];
const quiz= document.getElementById('quiz')
const answerE1s = document.querySelectorAll('.answer')
const questionE1 = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

 loadQuiz()
function loadQuiz(){ 

    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionE1.innerText = currentQuiz.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}
function deselectAnswers(){
    answerE1s.forEach(answerE1 => answerE1.checked = false)
}
function getSelected(){
    let answer
    answerE1s.forEach(answerE1 =>{
        if (answerE1.checked) {
            answer = answerE1.id
            
        }
    })
    return answer
}
submitBtn.addEventListener('click', () =>{
    const answer = getSelected()
    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++
        }
        currentQuiz++
        if(currentQuiz < quizData.length){
            loadQuiz()
        }else{
            quiz.innerHTML =`
            <h2>you answered ${score}/${quizData.length} question correctly</h2>
            <button onclick="location.reload()">Reload</button>`
        }
    }
})



