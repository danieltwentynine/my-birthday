document.addEventListener('DOMContentLoaded', function(){

    const timerSection = document.querySelector('.timer');
    const heightTimer = timerSection.clientHeight;

    window.addEventListener('scroll', function(){
        const scrollPosition = window.scrollY;

        if(scrollPosition < heightTimer) {
            hideHeaderElement();
        } else {
            showHeaderElement();
        }
    })

})

function hideHeaderElement() {
    const header = document.querySelector('header');
    header.classList.add('header--is-hidden');
}

function showHeaderElement() {
    const header = document.querySelector('header');
    header.classList.remove('header--is-hidden');
}