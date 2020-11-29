function сlick() {
    let userClick = document.querySelector('.user');
    let dropMenuClick = document.querySelector('.drop-menu');
    let body = document.querySelector('body');

    userClick.onclick = () => {
        dropMenuClick.classList.toggle('d-block');
    }
}

сlick();

function getBurger() {
    document.querySelector('.burger-menu').onclick = () => {
        document.querySelector('.burger-menu').classList.toggle('active');
        document.querySelector('.list').classList.toggle('active');
        document.querySelector('body').classList.toggle('lock');
        document.querySelector('.wrapper').classList.toggle('black')
    }
}

getBurger();

