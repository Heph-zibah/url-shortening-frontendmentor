// MOBILE RESPONSIVENESS
const menuBar = document.querySelector('.menuBar');
const closeBar = document.querySelector('.close--bar');
const mobileMenu = document.querySelector('#mobile--modal');

menuBar.addEventListener('click', () => {
    closeBar.style.display = 'block';
    mobileMenu.style.display = 'block';
    menuBar.style.display = 'none';
});

closeBar.addEventListener('click', () => {
    closeBar.style.display = 'none';
    mobileMenu.style.display = 'none';
    menuBar.style.display = 'block';

});

window.addEventListener('click', (e) => {
    if (e.target === mobileMenu) {
        mobileMenu.style.display = 'none';
    }
});

const submitBtn = document.querySelector('#shorten__form');
const errorMsg = document.querySelector('.error-msg');
const input = document.querySelector('#shorten-url');


function errMsg() {
    if (input.value === '') {
        errorMsg.innerText = 'Please add a link';
        input.classList.add('error');
    }
}


submitBtn.addEventListener('submit', (e) => {
    e.preventDefault();
    errMsg();
});