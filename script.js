let questions = [
    {
        "question": "Welches Jahr gilt als Geburtsjahr des Internets?",
        "answer_1": "1969",
        "answer_2": "1973",
        "answer_3": "1983",
        "answer_4": "1993",
        "right_answer": 1
    },
    {
        "question": "Wie viele verschiedene Programmiersprachen gibt es?",
        "answer_1": "Über 1000",
        "answer_2": "Über 10000",
        "answer_3": "Über 100",
        "answer_4": "Unzählig",
        "right_answer": 3
    },
    {
        "question": "Was ist die Abkürzung für World Wide Web?",
        "answer_1": "W-W-W",
        "answer_2": "W3",
        "answer_3": "WEB",
        "answer_4": "WWW",
        "right_answer": 4
    },
    {
        "question": "Was ist die Abkürzung für Application Programming Interface?",
        "answer_1": "APII",
        "answer_2": "API",
        "answer_3": "APL",
        "answer_4": "APIE",
        "right_answer": 2
    },
    {
        "question": "Welches Betriebssystem ist das beliebteste Betriebssystem der Welt",
        "answer_1": "macOS",
        "answer_2": "Linux",
        "answer_3": "Windows",
        "answer_4": "Android",
        "right_answer": 3
    },
    {
        "question": "Was ist die Abkürzung für Central Processing Unit?",
        "answer_1": "CPU",
        "answer_2": "APU",
        "answer_3": "GPU",
        "answer_4": "TPU",
        "right_answer": 1
    },
    {
        "question": "Was ist die Aufgabe eines Frameworks?",
        "answer_1": "Ein Framework ist ein Programm, das Daten verarbeitet.",
        "answer_2": "Ein Framework bietet Entwicklern eine Struktur für die Erstellung von Programmen.",
        "answer_3": "Ein Framework ist ein Prozessor, der Daten verarbeitet.",
        "answer_4": "Ein Framework ist ein Cloud-Speicher.",
        "right_answer": 2
    },
    {
        "question": "Wie heißt die Software, die für die Steuerung eines Computers zuständig ist?",
        "answer_1": "Office-Software",
        "answer_2": "Grafiksoftware",
        "answer_3": "Anwendungssoftware",
        "answer_4": "Betriebssystem",
        "right_answer": 4
    },
    {
        "question": "Was ist die Abkürzung für Uniform Resource Locator?",
        "answer_1": "URL",
        "answer_2": "URR",
        "answer_3": "ULU",
        "answer_4": "ULR",
        "right_answer": 1
    },
    {
        "question": "Wie heißt das Programm, mit dem man Bilder bearbeiten kann?",
        "answer_1": "Präsentationsprogramm",
        "answer_2": "Tabellenkalkulationsprogramm",
        "answer_3": "Bildbearbeitungsprogramm",
        "answer_4": "Textverarbeitungsprogramm",
        "right_answer": 3
    },
];

let currentQuestion = 0;
let rightQuestions = 0;
let Audio_Success = new Audio('audio/success.mp3');
let Audio_Fail = new Audio('audio/wrong.mp3');
let Audio_Finish = new Audio('audio/finish.mp3')
function init() {
    document.getElementById('question_amount').innerHTML = questions.length;

    showQuestion();
}

function showQuestion() {
    let question = questions[currentQuestion];

    if(currentQuestion >= questions.length) {
        //show Endscreen
        Audio_Finish.play();
        document.getElementById('endScreen').style = '';
        document.getElementById('questionBody').style = 'display:none';
        document.getElementById('question_amount_result').innerHTML = questions.length;
        document.getElementById('amount_of_right_questions').innerHTML = rightQuestions;
        document.getElementById('quiz_picture').src = 'img/trophy.png';  
    }   else {

        let percent = (currentQuestion +1) / questions.length;
        percent = percent * 100;
        document.getElementById('progressBar').innerHTML = `${percent}%`;
        document.getElementById('progressBar').style = `width: ${percent}%`;
    document.getElementById('current-question-number').innerHTML = currentQuestion + 1;
    document.getElementById('question').innerHTML = question['question'];
    document.getElementById('answer_1').innerHTML = question['answer_1'];
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];
    }
}

function answer(selection) {
    let question = questions[currentQuestion];
    let selectedQuestionNumber = selection.slice(-1);
    let ifOfRightAnswer = `answer_${question['right_answer']}`;

    if(selectedQuestionNumber == question['right_answer']) {
        document.getElementById(selection).parentNode.classList.add('bg-success');
        rightQuestions++;
        Audio_Success.play();
    } else {
        document.getElementById(selection).parentNode.classList.add('bg-warning');
        document.getElementById(ifOfRightAnswer).parentNode.classList.add('bg-success');
        Audio_Fail.play();
    }
    document.getElementById('next-button').disabled = false;
}

function nextQuestion() {
    currentQuestion++;
    document.getElementById('next-button').disabled = true;
    resetButtons();
    showQuestion();

}

function resetButtons() {
    document.getElementById('answer_1').parentNode.classList.remove('bg-warning');
    document.getElementById('answer_1').parentNode.classList.remove('bg-success');
    document.getElementById('answer_2').parentNode.classList.remove('bg-warning');
    document.getElementById('answer_2').parentNode.classList.remove('bg-success');
    document.getElementById('answer_3').parentNode.classList.remove('bg-warning');
    document.getElementById('answer_3').parentNode.classList.remove('bg-success');
    document.getElementById('answer_4').parentNode.classList.remove('bg-warning');
    document.getElementById('answer_4').parentNode.classList.remove('bg-success');
}

function restart() {
    document.getElementById('quiz_picture').src = 'img/quiz.png';
    currentQuestion = 0;
    rightQuestions = 0;
    document.getElementById('endScreen').style = 'display: none';
    document.getElementById('questionBody').style = '';
    init();
}