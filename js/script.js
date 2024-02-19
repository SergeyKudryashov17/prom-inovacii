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

const payItemTitles = document.querySelectorAll('.pay-item__title');
payItemTitles.forEach(item => {
    item?.addEventListener('click', () => {
        const block = item.closest('.pay-item');
        block.classList.toggle('pay-item_open');
    });
});