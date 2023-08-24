function closeModal() {
    const modal = document.querySelector('.modal');
    const overlay = document.querySelector('.modal-backdrop');

    modal.classList.remove('show')
    overlay.classList.remove('show')

    const   list = document.querySelector('.question-list'),
            listPosition = list.getBoundingClientRect().top + window.scrollY,
            scrollOptions = {
                top: listPosition,
                behavior: 'smooth'
             };


        setTimeout(() => {
            window.scrollTo(scrollOptions);
            document.body.style.overflow = '';
        }, 4)
        
}