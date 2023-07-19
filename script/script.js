document.querySelector('.js-features-menu').addEventListener('click',()=>{
    const dropMenu = document.querySelector('.js-dropdown-menu');
    if(dropMenu.classList.contains('dropdown-active')){
        dropMenu.classList.remove('dropdown-active')
    }
    else {
        dropMenu.classList.add('dropdown-active')
    }


    // .classList.add('dropdown-active');
})