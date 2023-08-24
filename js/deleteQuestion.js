function deleteQuestions() {
    const qList = document.querySelector('.question-list')
    const localQuestions = getQuestionsFromStorage();
    if (localQuestions.length) {
        qList.innerHTML = Question.renderQuestionList(getQuestionsFromStorage());
    }
}