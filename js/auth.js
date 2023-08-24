function auth() {
    const authForm = document.querySelector('#auth-form')

    authForm.addEventListener('submit', authHandler)
}

auth();