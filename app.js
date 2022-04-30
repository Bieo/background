const title = document.querySelector('.title')
const question = document.querySelector('.question')
const answers = document.querySelector('.answers')
const quiz = {
    title: 'Какой нибудь текст',
    questions: [{
            id: 1,
            question: "Как какать?",
            answers: [
                "1) Нет .",
                "2) Да .",
                "3) Не знаю ."
            ]
        },
        {
            id: 1,
            question: "Как",
            answers: [
                "Ответ 1",
                "Ответ 2"
            ]
        }
    ]
}

function generateQuestion() {
    title.innerHTML = quiz.title
    question.innerHTML = `<p>${quiz.questions[0].question}</p>`
        // answers.innerHTML += `<p>${quiz.questions[0].answers[0]}</p>`
        // answers.innerHTML += `<p>${quiz.questions[0].answers[1]}</p>`
        // answers.innerHTML += `<p>${quiz.questions[0].answers[2]}</p>`
    quiz.questions[0].answers.forEach(element => {
        const div = document.createElement('div')
        div.className = 'answers '
        div.innerHTML = `<p>${element}</p>`
        answers.append(div)
        div.addEventListener('click', () => {
            alert(element)

        })
    })
};
generateQuestion()