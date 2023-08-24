function authHandler(e) {
    e.preventDefault();
    const email = document.querySelector('#auth-email').value;
    const password = document.querySelector('#auth-password').value;

    authWIthEmailAndPassword(email,password)
}