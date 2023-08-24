function getQuestion() {
    const qForm = document.querySelector('#q-form')

    qForm.addEventListener('submit', qHandler)
}

getQuestion();