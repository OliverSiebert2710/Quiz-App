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
        "question": "Was ist die Abkürzung für &lb;World Wide Web&lg;?",
        "answer_1": "W-W-W",
        "answer_2": "W3",
        "answer_3": "WEB",
        "answer_4": "WWW",
        "right_answer": 4
    },
    {
        "question": "Was ist die Abkürzung für &lb;Application Programming Interface&lg;?",
        "answer_1": "APII",
        "answer_2": "API",
        "answer_3": "APL",
        "answer_4": "<APIE>",
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
        "question": "Was ist die Abkürzung für &lb;Central Processing Unit&lg;?",
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
        "question": "Was ist die Abkürzung für &lb;Uniform Resource Locator&lg;?",
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

function init() {
    document.getElementById('question_amount').innerHTML = questions.length;
}