




document.querySelector('.js-features-menu').addEventListener('click', () => {
    dropDown('features')
})

document.querySelector('.js-company-menu').addEventListener('click',()=>{
    dropDown('company')
})


function dropDown(menu) {
    const dropMenu = document.querySelector(`.js-${menu}-dropdown-menu`);
    if (dropMenu.classList.contains('dropdown-active')) {
        dropMenu.classList.remove('dropdown-active')
    }
    else {
        dropMenu.classList.add('dropdown-active')
    }
}