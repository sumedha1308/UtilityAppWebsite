// window.onload = () => {
const inputToggle = document.querySelector('.toggle');
const inputMenu = document.querySelector('.menu');
const items = document.querySelectorAll('.item');

function toggleMobileMenu() {
    if (inputMenu.classList.contains('active')) {
        inputMenu.classList.remove('active');
        inputToggle.querySelector('a').innerHTML = "<i class='fas fa-bars'></i>";
    } else {
        inputMenu.classList.add('active');
        inputToggle.querySelector('a').innerHTML = "<i class='fas fa-times'></i>";
    }
}

function eventSubmenuItem() {
    if (this.classList.contains('submenu-active')) {
        this.classList.remove('submenu-active');
    } else if (inputMenu.querySelector('.submenu-active')) {
        inputMenu.querySelector('.submenu-active').classList.remove('submenu-active');
        this.classList.add('submenu-active');
    } else {
        this.classList.add('submenu-active');
    }
}

function eventCloseSubmenu(e) {
    const isClickInside = inputMenu.contains(e.target);
    if (!isClickInside && inputMenu.querySelector('.submenu-active')) {
        inputMenu.querySelector('.submenu-active').classList.remove('submenu-active');
    }
}

inputToggle.addEventListener('click', toggleMobileMenu);
for (const item of items) {
    if (item.querySelector('.submenu')) {
        item.addEventListener('click', eventSubmenuItem);
    }
    item.addEventListener('keypress', eventSubmenuItem);
}
document.addEventListener('click', eventCloseSubmenu);
// }