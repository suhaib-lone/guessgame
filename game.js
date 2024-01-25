//VARIABLES

let update= document.querySelector('#update');
let gnum=document.querySelector('#gnum');
let enter=document.querySelector('#enter');
let guessbox=document.querySelector('.guessbox');
let preNums=document.querySelector('#GuessList');
let Guessed=document.querySelector('#Guessed');
let Status=document.querySelector('#status');
let guessNum=Math.floor(Math.random()*100 +1);
let guessCount=1;
let resetbtn;

update.innerHTML ="Guess a number between 1 and 100";

function lowORhi(){

}

function checkGuess(){

    const guesses=Number(gnum.value);
    if(guessCount===1){
        Guessed.textContent="Previous Guess: ";
    }
    preNums.textContent+=guesses + ' ';
    
    if(guessCount>10){
        Status.innerHTML ='YOU LOSE!';
        Status.style.backgroundColor ='pink';
        Status.style.color='red';
        update.innerHTML="";
        reSET();
    }
    else if(gnum.value<1 || gnum.value>100){
        update.innerHTML="GUESS CORRECT NUMS";
    }
    
    else if(gnum.value ==guessNum){
        Status.innerHTML ='YOU WON!';
        Status.style.color='yellow';
        update.innerHTML="";
        Status.style.backgroundColor ='green';
        reSET();
    }
    else{
        Status.textContent ='wrong';
        Status.style.color='red';
        Status.style.backgroundColor ='pink';
    
        if(gnum.value >guessNum){
            update.innerHTML ="Number too high!";
        }
        else{
            update.innerHTML ="Number too low!";
        }
    
    }
    
    
    guessCount++;
    gnum.value="";
    gnum.focus();
}



//ON SUBMIT EVENT LISTNER

enter.addEventListener('click' || 'keypress', checkGuess(e);

//RESET FUNCTION TO RESET THE GAME

function reSET(){
    gnum.disabled =true;
    enter.disabled =true;
    resetbtn=document.createElement('button');
    resetbtn.textContent ='Reset Game';
    resetbtn.style="background-color:black;padding:5px;border-radius:2px;font-size:15px;color:cyan";
    guessbox.appendChild(resetbtn);
    resetbtn.addEventListener('click',newGame);
}

// ON RESET EVENT LISTNER

function newGame(){
    guessCount=1;
    update.innerHTML ="Guess a number between 1 and 100";
    Guessed.textContent='';
    const resetParas = document.querySelectorAll('p');
    for (const resetPara of resetParas) {
      resetPara.textContent = '';
    }
    gnum.value='';
    gnum.disabled = false;
    enter.disabled =false;
    resetbtn.parentNode.removeChild(resetbtn);
    Status.style.background='none';
    gnum.focus();
    guessNum=Math.floor(Math.random()*100 +1);
}
