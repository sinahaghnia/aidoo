    //  add the elements we need 

const iconBar = document.querySelector('.navigation');
const hiddenNav = document.querySelector('.hidden-navigation');
const backIcon = document.querySelector('.back-icon');
const overLay = document.querySelector('.overlay');
const login = document.querySelector('.log-in');
const mainPage = document.querySelector('.main-page');

const questionAndAnswer = document.querySelectorAll('.question-and-answer');

const loginButton = document.querySelector('.login-button');

const divNameInput = document.querySelector('.name-input');
const divNumberInput = document.querySelector('.number-input');
const nameInput = divNameInput.querySelector('input');
const nameError = document.querySelector('.name-error');
const numberInput = divNumberInput.querySelector('input');
const numberError = document.querySelector('.number-error');


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

                            // make frequently question box functionality

questionAndAnswer.forEach( question =>{
    const answer = question.querySelector('.answer')
    const questionIcon = question.querySelector('.fa-angle-down')

    question.addEventListener('click' , ()=>{

    //     questionAndAnswer.forEach( q =>{
    //     const otherQuestion = q.querySelector('.answer');

    //     if( otherQuestion !== answer){
    //         otherQuestion.classList.remove('show-answer');
    //     };
    // })
        answer.classList.toggle('show-answer');
        questionIcon.classList.toggle('icon-rotation');
    
    })
})

                                        // when user click on login button go to login page

loginButton.addEventListener('click' , ()=>{
    window.location.href = 'login.html'
})

                                        // add functionality for advise part 


nameInput.addEventListener('input' , ()=>{
const value = nameInput.value;

   if(value == ''){
        nameInput.style.border = '2px solid #e7e4e4';
        nameError.style.opacity = '0';

    }else if(!isNaN(Number(value))){
        nameInput.style.border = '1.5px solid red';
        nameError.style.opacity = '1';
    }else{
        nameInput.style.border = '2px solid #0073ff'
    }
})

numberInput.addEventListener('input' , ()=>{
const value = numberInput.value;

if(value === '' || value.startsWith('09') || value.startsWith('0') ){
    numberInput.style.border = '2px solid #e7e4e4';
    numberError.style.opacity = '0';

}else{
    numberInput.style.border = '2px solid red';
    numberError.style.opacity = '1';
}
    

})