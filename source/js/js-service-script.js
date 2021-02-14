window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    let navBlock = document.querySelector('.one');
    let navBlockTwo = document.querySelector('.two');

    if(scrolled > 50){
        navBlock.classList.add('d-none');
        navBlockTwo.classList.add('pos-fix');
    } else if (scrolled < 50){
        navBlock.classList.remove('d-none');
        navBlockTwo.classList.remove('pos-fix');
    }
});

let btnShow = document.querySelector('.txt-send');
let btnShow2 = document.querySelector('.txt-send-two');
let btnShow3 = document.querySelector('.txt-send-three');
let hideBlock = document.querySelector('.main-hide-block');
let lock = document.querySelector('.hide');
let btnHide = document.querySelector('.btn-hide');

function getClick() {

    btnShow.onclick = () => {
        hideBlock.classList.toggle('d-hide-block');
        lock.classList.toggle('lock');
        const txtOne = document.querySelector('#some-txt');

        txtOne.textContent = 'Сетевое администрирование.';
    }
    btnShow2.onclick = () => {
        hideBlock.classList.toggle('d-hide-block');
        lock.classList.toggle('lock');
        const txtOne = document.querySelector('#some-txt');

        txtOne.textContent = 'Создание сайтов.';
    }
    btnShow3.onclick = () => {
        hideBlock.classList.toggle('d-hide-block');
        lock.classList.toggle('lock');
        const txtOne = document.querySelector('#some-txt');

        txtOne.textContent = 'Обеспечение информационной безопасности.';
    }

    btnHide.onclick = () => {
        hideBlock.classList.toggle('d-hide-block');
        lock.classList.toggle('lock');
    }

}


getClick();
