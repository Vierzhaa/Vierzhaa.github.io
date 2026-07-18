const menuBtn = document.getElementById('menuBtn');
const dropdownMenu = document.getElementById('dropdownMenu');

menuBtn.addEventListener('click', (e) => {
    dropdownMenu.classList.toggle('show');
    e.stopPropagation();
});

dropdownMenu.addEventListener('click', () => {
    dropdownMenu.classList.remove('show');
});

window.addEventListener('click', () => {
    if (dropdownMenu.classList.contains('show')) {
        dropdownMenu.classList.remove('show');
    }
});
