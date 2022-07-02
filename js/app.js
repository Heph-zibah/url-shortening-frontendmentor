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