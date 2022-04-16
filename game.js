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

update.innerHTML ="Guess a number between 1 and 100";

//ON SUBMIT EVENT LISTNER

enter.addEventListener('click', function(){

    if(gnum.value<1 || gnum.value>100){
        update.innerHTML="GUESS CORRECT NUMS";
    }
    else if(guessCount>10){
        Status.innerHTML ="YOU LOSE!";
        Status.style.backgroundColor ="pink";
        Status.style.color="red";
        update.innerHTML="";
        gnum.disabled =true;
        enter.disabled =true;
        reSET();
    }
    else if(gnum.value ==guessNum){
        Status.innerHTML ="YOU WON!";
        update.innerHTML="";
        Status.style.backgroundColor ="green";
        Status.style.color="yellow";
        gnum.disabled =true;
        enter.disabled =true;
        reSET();
    }
    else{
        if(gnum.value >guessNum){
            update.innerHTML ="Number too high!";
        }
        else{
            update.innerHTML ="Number too low!";
        }
        Status.innerHTML ="wrong";
        Status.style.color="red";
        Status.style.backgroundColor ="pink";
        let savePreNums=[];
        savePreNums+= gnum.value;
        Guessed.textContent="Previous Guess:";
        preNums.textContent+=`${savePreNums} `;
    }
    
    guessCount++;
    gnum.value="";
    gnum.focus();
})

//RESET FUNCTION TO RESET THE GAME

function reSET(){
    resetbtn=document.createElement('button');
    resetbtn.textContent ='Reset Game';
    resetbtn.style="background-color:black;padding:5px;border-radius:2px;font-size:15px;color:cyan";
    guessbox.appendChild(resetbtn);
    resetbtn.addEventListener('click',newGame)
}

//ON RESET EVENT LISTNER

function newGame(){
    update.innerHTML ="Guess a number between 1 and 100";
    gnum.value="";
    Guessed.textContent='';
    preNums.textContent='';
    Status.innerHTML ="";
    Status.style.display="none";
    gnum.disabled = false;
    enter.disabled =false;
    guessCount=1;
    gnum.focus();
    guessNum=Math.floor(Math.random()*100 +1);
    resetbtn.parentNode.removeChild(resetbtn);
}