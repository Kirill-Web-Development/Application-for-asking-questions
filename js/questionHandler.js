function qHandler(e) {
    e.preventDefault();
    const qForm = document.querySelector('#q-form')
    const qInput = qForm.querySelector('#q-input');
    const qBtn = qForm.querySelector('button')

    if (qInput.value) {
        qBtn.disabled = true;

        const q = {
            text: qInput.value.trim(),
            date: new Date().toJSON()
        }
        Question.makeQ(q)
            .finally(() => {
                qBtn.disabled = false;
                qForm.reset();
            })
    }
}