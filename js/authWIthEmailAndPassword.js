function authWIthEmailAndPassword(email, password) {
    return fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCwIbZIbTlR40PQH-NRsQbDkHmROXjp6PY', {
        method: 'POST',
        body: JSON.stringify({
            email,
            password,
            returnSecureToken: true
        }),
        headers: {
            'Content-type': 'application/json'
        }
    }).then(response => response.json())
    .then(data => data.idToken)
    .then(token => {
        return fetch(`https://auth-cbb31-default-rtdb.asia-southeast1.firebasedatabase.app/questions.json?auth=${token}`)
            .then(response => response.json())
            .then(data => {
                if (data.error) {
                    showErr(data.error)
                    deleteQuestions();
                } else {
                    Question.renderQuestionList(Object.values(data));
                    hideErr();
                    closeModal();
                }
            })
    })
}
