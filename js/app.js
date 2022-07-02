const menuBar = document.querySelector('.menuBar');
const closeBar = document.querySelector('.close--bar');
const mobileMenu = document.querySelector('#mobile--modal');

console.log(menuBar);
console.log(closeBar);
console.log(mobileMenu);

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
    if (e.target === modal) {
        mobileMenu.style.display = 'none';
    }
});