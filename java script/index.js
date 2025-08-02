    //  add the element we need 

const iconBar = document.querySelector('.navigation');
const hiddenNav = document.querySelector('.hidden-navigation');
const backIcon = document.querySelector('.back-icon');
const overLay = document.querySelector('.overlay');
const login = document.querySelector('.log-in');
const mainPage = document.querySelector('.main-page');

                            // when user click on navigation bar show slide bar 

iconBar.addEventListener('click' , (event)=>{
    hiddenNav.classList.add('show-navigation');
    overLay.classList.add('show-overlay');

                            // when user click on back icon hidden slide bar 
})
backIcon.addEventListener('click' , (event)=>{
    hiddenNav.classList.remove('show-navigation');
    overLay.classList.remove('show-overlay');
})

                        // when user click on login part af navigation go to the 'login.html'

login.addEventListener('click' , ()=>{
    window.location.href = 'login.html';
})

