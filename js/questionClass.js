class Question {
    static makeQ(question) {
        return fetch('https://auth-cbb31-default-rtdb.asia-southeast1.firebasedatabase.app/questions.json', {
            method: 'POST',
            body: JSON.stringify(question),
            headers: {
                'Content-type': 'application/json'
            }
        }).then(response => response.json())
        .then(response => {
            question.id = response.name
            return question
        })
        .then(question => {
            addToStorage(question)
            return getQuestionsFromStorage();
        })
        .then(Question.renderQuestionList)
    }

    static renderQuestionList(arrOfQuestions) {
        const listEl = document.querySelector('.question-list')
        if (arrOfQuestions.length) {
            const questionsMarkup = arrOfQuestions = arrOfQuestions.map((item, i) => {
                return `
                <li class="list-group-item">
                    <h3><small class="text-body-secondary">Question ${i+1}</small></h3>
                    <time class="text-primary" datetime="${new Date(item.date).toLocaleDateString()}">${new Date(item.date).toLocaleString()}</time>
                    <p>${item.text}</p>
                    <small>${getPastTime(item.date)}</small>
                </li>
                `
            }).join('')
            listEl.innerHTML = questionsMarkup
            return questionsMarkup;
        }
    }
}