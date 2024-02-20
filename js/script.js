document.addEventListener('scroll', (event) => {
    console.log(event);
});


const dataItemTitles = document.querySelectorAll('.data-item__title');
dataItemTitles.forEach(item => {
    item?.addEventListener('click', () => {
        const block = item.closest('.data-item');
        block.classList.toggle('data-item_open');
    });
});


const payItemTitles = document.querySelectorAll('.pay-item__header');
payItemTitles.forEach(item => {
    item?.addEventListener('click', () => {
        const block = item.closest('.pay-item');
        block.classList.toggle('pay-item_open');
    });
});


const mobileMenu = document.querySelector('.mobile-menu');
const btnMenu = document.querySelector('.mobile-menu-icon');
const btnCloseMenu = document.querySelector('.mobile-menu__btn-close');
const displayMenu = (displayFlag) => mobileMenu.classList.toggle('mobile-menu_open', displayFlag);

btnMenu.addEventListener('click', () => displayMenu(true));
btnCloseMenu.addEventListener('click', () => displayMenu(false));
mobileMenu.addEventListener('click', (event) => {
    if (event.target.closest('.mobile-menu__container')) return;
    displayMenu(false);
})
