let elBody = document.querySelector('body'),
    elBtn = document.querySelector('.site-header__nav-mode');


elBtn.addEventListener('click',() => {
    elBody.classList.toggle('theme')
})