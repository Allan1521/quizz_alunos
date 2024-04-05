/* Parágrafo onde será exibido a pergunta */
const question = document.querySelector("#question");
//div onde será exibido as respostas
const answersBox = documenrt.querySelector("#answers-box");
//elemento pai onde serão exibidas as perguntas
const quizzContainer = document.querySelector("#quizz-container");
//lemento pai onde serão as rspostas
const scoreContainer = document.querySelector("#score-container");
const letters = ['a', 'b', 'c', 'd']; //explicação de vetores "Arrays", sempre que for declarar um array usmos [] se for texto declarar 'a', 'b', 'c' e se for número declarar normal sem aspas. 
let points = 0;
let actualQuestion = 0;

// nó que representa uma pergunta
const question = [{
    "question": "PHP foi desenvolvido para qual fim?",
    "answers": [{}] //usamos Json
}]

const question = [
    {
        "question": "PHP foi desenvolvido para qual fim?",
        "answers": [
            {
                "answers": "back-end",
                "correct": true
            },
            {
                "answers": "front-end",
                "correct": false
            },
            {
                "answers": "sistema operacional",
                "correct": false
            },
            {
                "answers": "Banco de dados",
                "correct": false
            },
        ]
    },
    {
        "question": "Uma forma de declarar variável em JavaScript:",
        "answers": [
            {
                "answer": "$var",
                "correct": false
            },
            {
                "answer": "var",
                "correct": true
            },
            {
                "answer": "@var",
                "correct": false
            },
            {
                "answer": "#let",
                "correct": false
            },
        ]

    },
    {
        "question": "Qual o seletor de id no CSS",
        "answers": [
            {
                "answer": "#",
                "correct": true
            },
            {
                "answer": ".",
                "correct": false
            },
            {
                "answer": "@",
                "correct": false
            },
            {
                "answer": "/",
                "correct": false
            },
        ]
    }

]
// Create a question
function CreateQuestion(i) {

    //limpa questão anterior
    const oldButtons = answersBox.querySelectorAll("button");
    //oldButtons = [button, button, button, button] é um vetor

    //percorre todas as posições do array limpando os botões que já estão na tela.// 
    oldButtons.forEach(function (btn) {
        btn.remove();
    });

    //Altera texto da perguta
    const questionText = question.querySelector("#question-text");
    const questionNumber = question.querySelector("#questio-number");

    //altera o texto da questão atual de acordo com as questões do arquivo json
    questionText.textContent = question[i].question;
    questionNumber.textContent = i + 1; 
    
    // Insere alternativas
    question[i].answer.forEach(function(answer, i){

    // Altera texto do template
    const answerTemplate = document.querySelector(".answer-template").cloneNode(true);

    const letterBtn = answerTemplate.querySelector(".btn-letter");
    const answerText = answerTemplate.querySelector(".question-answer");
    letterBtn.textContent = letters[i];
    answerText.textContent = answer['answer'];

    })
}



