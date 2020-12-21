function getClick() {
    document.querySelector('.user').onclick = () => {
        document.querySelector('.drop-menu').classList.toggle('d-block');
    }
}

getClick();

function getBurger() {
    document.querySelector('.burger-menu').onclick = () => {
        document.querySelector('.form').classList.toggle('z-index');
        document.querySelector('.burger-menu').classList.toggle('active');
        document.querySelector('.list').classList.toggle('active');
        document.querySelector('body').classList.toggle('lock');
        document.querySelector('.wrapper').classList.toggle('black')
    }
}

getBurger();