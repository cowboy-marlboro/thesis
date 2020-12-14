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


document.addEventListener('DOMContentLoaded', function () {
    var pass1 = document.querySelector('#password'),
        pass2 = document.querySelector('#password-check')
    pass1.addEventListener('input', function () {
        if(this.value != pass2.value){
            pass2.setCustomValidity('Пароли не совпадают')
        } else {
            pass2.setCustomValidity('')
        } 
    })
    pass2.addEventListener('input', function () {
        if(this.value != pass1.value){
            pass2.setCustomValidity('Пароли не совпадают')
        } else {
            pass2.setCustomValidity('')
        } 
    })
})
