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
    console.log(scrolled);
});


window.addEventListener('scroll', () => {
    const scroll = window.scrollY;
    let txtBlock = document.querySelector('.txt-info-block');

    if (scroll > 150){
        txtBlock.classList.add('top-opacity');
    }else if (scroll < 150){
        txtBlock.classList.remove('top-opacity');
    }

    let titleBlock = document.querySelector('.txt-title-info-block');

    if (scroll > 450) {
        titleBlock.classList.add('left-opacity');
    } else if(scroll < 450){
        titleBlock.classList.remove('left-opacity');
    }

    let imgContent = document.querySelector('.img-content-block');
    let listContent = document.querySelector('.content-info-block');

    if (scroll > 850) {
        imgContent.classList.add('img-top');
    } else if ( scroll < 850){
        imgContent.classList.remove('img-top');
    } 
    if ( scroll > 1150){
        imgContent.classList.add('img-scale');
    } else if ( scroll < 1150){
        imgContent.classList.remove('img-scale');
    }

    if (scroll > 850){
        listContent.classList.add('left-list-opacity');
    } else if (scroll < 850) {
        listContent.classList.remove('left-list-opacity');
    }
});

function getClick() {
    let btnShow = document.querySelector('.antivirus-check-btn');
    let hideBlock = document.querySelector('.main-hide-block');
    let lock = document.querySelector('.hide');
    let btnHide = document.querySelector('.btn-hide');

    btnShow.onclick = () => {
        hideBlock.classList.toggle('d-hide-block');
        lock.classList.toggle('lock');
    }

    btnHide.onclick = () => {
        hideBlock.classList.toggle('d-hide-block');
        lock.classList.toggle('lock');
    }

}


getClick();