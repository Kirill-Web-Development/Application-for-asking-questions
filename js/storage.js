function addToStorage(q) {
    const localQuestions = localStorage.getItem('questions')
    if (localQuestions) {
       const newArr = JSON.parse(localQuestions)
       newArr.push(q)
       localStorage.setItem('questions', JSON.stringify(newArr))
    } else {
        localStorage.setItem('questions', JSON.stringify([q]))
    }
}

function getQuestionsFromStorage() {
    return JSON.parse(localStorage.getItem('questions') || '[]')
}

window.addEventListener('DOMContentLoaded', () => {
    Question.renderQuestionList(getQuestionsFromStorage());
})