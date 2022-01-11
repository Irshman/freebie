const burger = document.querySelector(".main__burger");
const menu = document.querySelector(".main__list");

burger.addEventListener('click', () => {
    burger.classList.toggle('main__burger--active');
    menu.classList.toggle('main__list--active');
})