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


