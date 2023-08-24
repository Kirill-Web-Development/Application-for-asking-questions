function showErr(err) {
    const error = document.querySelector('.error')

    if (!error) {
        const authForm = document.querySelector('#auth-form')
        const errEl = document.createElement('div');
        errEl.classList.add('error');
        errEl.style.color = 'red';
        errEl.textContent = err;
        authForm.append(errEl)
    }
    
}